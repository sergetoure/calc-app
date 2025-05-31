import { useReducer, createContext, useContext } from "react";

const calcStateContext = createContext();
const calcReducerContext = createContext();
const initialState = { currentValue: 0 };
const reducer = (state, action) => {
  if (action.type === "typing") {
    const { value } = action;
    if (value != "AC" && value != "=") {
      return { ...state, currentValue: state.currentValue + value };
    } else if (value == "AC") {
      return { ...state, currentValue: 0 };
    } else if (value == "=") {
      try {
        // Remove leading zeros from numbers in the expression
        const sanitizedExpression = state.currentValue
          .replace("x", "*")
          .replace(/\b0+(\d+)/g, "$1");
        const result = eval(sanitizedExpression);
        return { ...state, currentValue: result };
      } catch (error) {
        console.error("Error evaluating expression:", error);
        return { ...state };
      }
    }
  }
  return state;
};

export default function CalculatorProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <calcStateContext.Provider value={{ state }}>
        <calcReducerContext.Provider value={{ dispatch }}>
          {children}
        </calcReducerContext.Provider>
      </calcStateContext.Provider>
    </>
  );
}

export const useCalcStateContext = () => useContext(calcStateContext);
export const useCalcReducerContext = () => useContext(calcReducerContext);
