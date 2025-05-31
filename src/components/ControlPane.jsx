import DigitPane from "./DigitPane";
import OperationPane from "./OperationPane";
import { useState } from "react";

const initialDigitList = [
  "AC",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  ".",
];
const initialOperationList = ["+", "-", ":", "x", "="];

export default function ControlPane() {
  const [digitList, setDigitList] = useState(initialDigitList);
  const [operationList, setOperationList] = useState(initialOperationList);

  return (
    <>
      <article className="control-pane">
        <DigitPane digitList={digitList} />
        <OperationPane operationList={operationList} />
      </article>
    </>
  );
}
