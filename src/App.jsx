import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import DisplayPane from "./components/DisplayPane";
import ControlPane from "./components/ControlPane";
import {
  useCalcStateContext,
  useCalcReducerContext,
} from "./provider/CalculatorProvider";

function App() {
  const { dispatch } = useCalcReducerContext();
  return (
    <>
      <article className="calc">
        <article className="calc-logo">
          <img src={reactLogo} alt="logo" className="calc-logo__img" />
          <span className="calc-logo__title">cientis instrument</span>
        </article>
        <DisplayPane />
        <ControlPane />
      </article>
    </>
  );
}

export default App;
