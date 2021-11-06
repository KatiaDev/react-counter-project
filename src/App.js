import React, { useContext } from "react";
import { CounterContext } from "./contexts/counterContext";

const App = () => {
  const { state, dispatch } = useContext(CounterContext);

  const handleIncrease = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrease = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div className="box">
      <h1>Counter</h1>
      <p>Count: {state.count}</p>

      <div>
        <button
          type="button"
          onClick={handleIncrease}
          className="btn-increment"
        >
          +
        </button>
        <button
          type="button"
          onClick={handleDecrease}
          className="btn-decrement"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default App;
