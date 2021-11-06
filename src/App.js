import React from "react";

function App() {
  return (
    <div className="App">
      <div className="calculator">
        <div className="container">
          <div className="display">
            <span className="cursor" />
          </div>
          <button className="btn">AC</button>
          <button className="btn">C</button>
          <button className="btn">x</button>
          <button className="btn">/</button>
          <button className="btn">7</button>
          <button className="btn">8</button>
          <button className="btn">9</button>
          <button className="btn">+</button>
          <button className="btn">4</button>
          <button className="btn">5</button>
          <button className="btn">6</button>
          <button className="btn">-</button>
          <button className="btn">1</button>
          <button className="btn">2</button>
          <button className="btn">3</button>
          <button className="btn zero">0</button>
          <button className="btn">.</button>
          <button className="btn eq">=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
