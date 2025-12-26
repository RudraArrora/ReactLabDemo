import { memo, useCallback, useState } from "react";

const Child = memo(function Child({ onPing }) {
  return (
    <div className="row">
      <button className="btn primary" onClick={onPing}>
        Ping Child
      </button>
      <span className="muted">Child is memo()’d</span>
    </div>
  );
});

export default function UseCallbackLab() {
  const [count, setCount] = useState(0);

  const onPing = useCallback(() => {
    alert("Ping! (stable function via useCallback)");
  }, []); // ✅ stable identity

  return (
    <div className="card">
      <p className="muted">
        useCallback keeps function identity stable (useful with memo children).
      </p>
      <div className="row">
        <button className="btn" onClick={() => setCount((c) => c + 1)}>
          Parent state: {count}
        </button>
      </div>
      <Child onPing={onPing} />
    </div>
  );
}
