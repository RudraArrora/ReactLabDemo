import { useLocalStorageState } from "../hooks/useLocalStorageState.js";

export default function CustomHookLab() {
  const [name, setName] = useLocalStorageState("lab:name", "");

  return (
    <div className="card">
      <p className="muted">
        Custom hook = reuse logic. This persists state to localStorage.
      </p>
      <div className="row">
        <input
          className="input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Type + refresh page…"
        />
      </div>
      <div className="result">
        Stored: <b>{name || "—"}</b>
      </div>
    </div>
  );
}
