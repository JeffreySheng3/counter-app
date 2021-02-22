import React, { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0)

  const onClick = () => {
    setCounter({counter: this.state.counter + 1})
  }
  return (
    <div >
      <h1 className="heading"> Clicker Game </h1>
      <h2 className="desc">Click on the number to increase it!</h2>
      <div className="container">
        <button 
          onClick={() => setCounter(counter + 1)}
          className="btn">
          {counter}
        </button>
      </div>
      <div className="container">
          <button
            className="btn2"
            onClick = {() => setCounter(0)}
            >
            Reset
          </button>
        </div>
    </div>
  );
}

export default App;
