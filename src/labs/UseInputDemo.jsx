import { useInput } from "../hooks/useInput";

export default function UseInputDemo() {
  const name = useInput("");
  const email = useInput("");

  return (
    <div className="card">
      <p className="muted">
        useInput → removes boilerplate of controlled inputs.
      </p>

      <div className="col">
        <input className="input" placeholder="Name" {...name} />
        <input className="input" placeholder="Email" {...email} />
      </div>

      <div className="result">
        Name: <b>{name.value || "—"}</b> <br />
        Email: <b>{email.value || "—"}</b>
      </div>

      <div className="row">
        <button
          className="btn"
          onClick={() => {
            name.setValue("");
            email.setValue("");
          }}
        >
          Clear
        </button>
      </div>
    </div>
  );
}

