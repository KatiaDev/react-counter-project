import { useReducer } from "react";

const initialState = { count: 0 };

const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

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
