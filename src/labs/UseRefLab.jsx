import { useEffect, useRef, useState } from "react";

export default function UseRefLab() {
  const inputRef = useRef(null);
  const prevRef = useRef("");
  const [text, setText] = useState("");

  useEffect(() => {
    prevRef.current = text;
  }, [text]);

  return (
    <div className="card">
      <p className="muted">
        useRef stores values without re-render + can reference DOM.
      </p>

      <div className="row">
        <input
          ref={inputRef}
          className="input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type…"
        />
        <button
          className="btn primary"
          onClick={() => inputRef.current?.focus()}
        >
          Focus
        </button>
      </div>

      <div className="result">
        Previous value (ref): <b>{prevRef.current || "—"}</b>
      </div>
    </div>
  );
}
