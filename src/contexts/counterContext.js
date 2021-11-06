import { createContext, useReducer } from "react";

export const CounterContext = createContext();

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

const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  const value = { state, dispatch };

  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
};

export default CounterProvider;
