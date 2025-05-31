import { useCalcStateContext } from "../provider/CalculatorProvider";
export default function DisplayPane() {
  const { state } = useCalcStateContext();
  const { currentValue } = state;
  return (
    <>
      <div className="display-pane">{currentValue}</div>
    </>
  );
}
