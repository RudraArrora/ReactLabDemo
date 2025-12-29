import { useMemo, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";

export default function UseDebounceDemo() {
  const [text, setText] = useState("");
  const debounced = useDebounce(text, 500);

  const results = useMemo(() => {
    const data = [
      "apple",
      "banana",
      "mango",
      "orange",
      "grapes",
      "pineapple",
      "papaya",
    ];
    const q = debounced.trim().toLowerCase();
    if (!q) return [];
    return data.filter((x) => x.includes(q));
  }, [debounced]);

  return (
    <div className="card">
      <p className="muted">
        useDebounce → updates after user stops typing (500ms).
      </p>

      <div className="col">
        <input
          className="input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type fruit name..."
        />
      </div>

      <div className="result">
        Live: <b>{text}</b> <br />
        Debounced: <b>{debounced}</b>
      </div>

      <div className="result">
        Matches: {results.length ? results.join(", ") : "—"}
      </div>
    </div>
  );
}
