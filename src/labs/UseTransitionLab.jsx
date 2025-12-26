import { useMemo, useState, useTransition } from "react";

export default function UseTransitionLab() {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);
  const [isPending, startTransition] = useTransition();

  const filtered = useMemo(() => {
    const q = text.trim().toLowerCase();
    if (!q) return items;
    return items.filter((x) => x.toLowerCase().includes(q));
  }, [items, text]);

  return (
    <div className="card">
      <p className="muted">
        useTransition keeps typing responsive while heavy updates happen.
      </p>

      <div className="row">
        <input
          className="input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type to filter…"
        />
        <button
          className="btn primary"
          onClick={() =>
            startTransition(() => {
              const big = Array.from({ length: 5000 }, (_, i) => `Item ${i}`);
              setItems(big);
            })
          }
        >
          Load 5000
        </button>
      </div>

      <div className="result">
        {isPending ? "Updating…" : `Visible: ${filtered.length}`}
      </div>
    </div>
  );
}
