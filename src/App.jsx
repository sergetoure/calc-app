import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>My Calculation Application</h1>
      <article className="calc">
        <article className="calc-logo">
          <img src={reactLogo} alt="logo" className="calc-logo__img" />
          <span className="calc-logo__title">cientis instrument</span>
        </article>
        <div>
          <input className="display-pane" type="text" name="" id="" />
        </div>

        <article className="control-pane">
          <article className="control-pane__digit-pane">
            <div className="digit">AC</div>
            <div className="digit">1</div>
            <div className="digit">2</div>
            <div className="digit">3</div>
            <div className="digit">4</div>
            <div className="digit">5</div>
            <div className="digit">6</div>
            <div className="digit">7</div>
            <div className="digit">8</div>
            <div className="digit">9</div>
            <div className="digit">0</div>
            <div className="digit">.</div>
          </article>
          <article className="control-pane__operation-pane">
            <div className="digit digit--operation">+</div>
            <div className="digit digit--operation">-</div>
            <div className="digit digit--operation">:</div>
            <div className="digit digit--operation">x</div>
          </article>
        </article>
      </article>
    </>
  );
}

export default App;
