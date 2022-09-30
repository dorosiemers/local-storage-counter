import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function decrementCount() {
    if (count < 0) {
      setCount(count - 1);
    }
  }
  function incrementCount() {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={incrementCount}>+1</button>
      <button onClick={decrementCount}>-1</button>
    </div>
  );
}

export default App;
