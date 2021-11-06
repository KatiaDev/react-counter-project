import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./actions/counterActions";

const App = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state);

  const handleIncrease = () => {
    dispatch(increment());
  };

  const handleDecrease = () => {
    dispatch(decrement());
  };

  return (
    <div className="box">
      <h1>Counter</h1>
      <p>Count: {count}</p>

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
