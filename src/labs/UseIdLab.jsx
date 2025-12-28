import { useId } from "react";

function Field({ label }) {
  const id = useId();
  return (
    <div className="col">
      <label className="muted" htmlFor={id}>
        {label} {"and the feild id is"} {id}
      </label>
      <input
        id={id}
        className="input"
        placeholder={`Enter ${label.toLowerCase()}…`}
      />
    </div>
  );
}

export default function UseIdLab() {
  return (
    <div className="card">
      <p className="muted">
        useId gives stable unique ids for accessible forms.
      </p>
      <Field label="Email" />
      <Field label="Password" />
    </div>
  );
}
