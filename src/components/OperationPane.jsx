import Digit from "./Digit";
import { useState } from "react";
export default function OperationPane({ operationList }) {
  const [modifier, setModifier] = useState("digit digit--operation");
  return (
    <>
      <article className="control-pane__operation-pane">
        {operationList.map((digit, index) => {
          return <Digit key={index} digit={digit} modifier={modifier} />;
        })}
      </article>
    </>
  );
}
