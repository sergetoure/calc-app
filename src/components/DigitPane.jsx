import Digit from "./Digit";
import { useState } from "react";
export default function DigitPane({ digitList }) {
  const [modifier, setModifier] = useState("digit");
  return (
    <>
      <article className="control-pane__digit-pane">
        {digitList.map((digit, index) => {
          return <Digit key={index} digit={digit} modifier={modifier} />;
        })}
      </article>
    </>
  );
}
