import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "./actions/counterActions";

const App = (props) => {
  const handleIncrease = () => {
    props.increment();
  };

  const handleDecrease = () => {
    props.decrement();
  };

  return (
    <div className="box">
      <h1>Counter</h1>
      <p>Count: {props.count}</p>

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

// The mapStateToProps function specifies which portion of the
// state tree this component needs to receive. In this case,
// since our redux store is only storing the value of the count,
// this component receives the whole state. In a more complex
// redux application, though, it would receive only the relevant
// parts it needs from the state object.

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};
// The connect function is called in order to make this component aware
// of the rest of the redux architecture. Without this, this component
// is only a dumb React component. We pass in all of the functions that
// are reliant on Redux, along with the component itself, so that Redux
// makes itself known to this component.

export default connect(mapStateToProps, { increment, decrement })(App);
