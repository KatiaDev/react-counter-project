import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import CounterProvider from "./contexts/counterContext";

ReactDOM.render(
  <React.StrictMode>
    <CounterProvider>
      <App />
    </CounterProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
