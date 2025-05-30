import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.jsx";
import CalculatorProvider from "./provider/CalculatorProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CalculatorProvider>
      <App />
    </CalculatorProvider>
  </StrictMode>
);
