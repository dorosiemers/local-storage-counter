import "./App.css";
import { useState, useEffect } from "react";

const LOCAL_STORAGE_KEY = "counter-storage";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const storedCounter = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedCounter) setCount(storedCounter);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(count));
  }, [count]);

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
