import { useDeferredValue, useMemo, useState } from "react";

export default function UseDeferredValueLab() {
  const [text, setText] = useState("");
  const deferred = useDeferredValue(text);

  const results = useMemo(() => {
    const all = Array.from({ length: 6000 }, (_, i) => `Row ${i}`);
    const q = deferred.trim().toLowerCase();
    if (!q) return all.slice(0, 60);
    return all.filter((x) => x.toLowerCase().includes(q)).slice(0, 60);
  }, [deferred]);

  return (
    <div className="card">
      <p className="muted">
        useDeferredValue delays heavy UI updates while you type.
      </p>

      <div className="row">
        <input
          className="input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type fast…"
        />
      </div>

      <div className="result">
        Input: <b>{text}</b> • Deferred: <b>{deferred}</b> • Showing:{" "}
        <b>{results.length}</b>
      </div>

      <div className="miniGrid">
        {results.map((r) => (
          <div key={r} className="miniItem">
            {r}
          </div>
        ))}
      </div>
    </div>
  );
}
