import { useState } from "react";
import { usePrevious } from "../hooks/usePrevious";

export default function UsePreviousDemo() {
  const [count, setCount] = useState(0);
  const prev = usePrevious(count);

  return (
    <div className="card">
      <p className="muted">usePrevious → stores last value using ref.</p>

      <div className="row">
        <button className="btn" onClick={() => setCount((c) => c - 1)}>
          -
        </button>
        <div className="big">{count}</div>
        <button className="btn primary" onClick={() => setCount((c) => c + 1)}>
          +
        </button>
      </div>

      <div className="result">
        Previous: <b>{prev ?? "—"}</b>
      </div>
    </div>
  );
}
