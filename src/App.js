import { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, SetCount] = useState(0);

  return (
    <div className="App">
      <h1>Count</h1>
      <h2>{count}</h2>
      <button
        onClick={() => (count <= 0 ? "" : SetCount(count - 1))}
        className="decrease"
      >
        Decrease
      </button>
      <button onClick={() => SetCount(0)} className="reset">
        Reset
      </button>
      <button onClick={() => SetCount(count + 1)} className="increase">
        Increase
      </button>
    </div>
  );
}
