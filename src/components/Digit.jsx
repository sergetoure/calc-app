import { useCalcReducerContext } from "../provider/CalculatorProvider";
export default function Digit({ digit, modifier }) {
  const { dispatch } = useCalcReducerContext();
  return (
    <>
      <div
        className={modifier}
        onClick={() => dispatch({ type: "typing", value: digit })}
      >
        {digit}
      </div>
    </>
  );
}
