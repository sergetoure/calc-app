import { useReducer, createContext, useContext } from "react";

const calcStateContext = createContext();
const calcReducerContext = createContext();
const initialState = {};
const reducer = (state, action) => {
  if (action.type === "AC") {
    console.log("hello Serge tu es un dev");
  }
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
