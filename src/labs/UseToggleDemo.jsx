import { useToggle } from "../hooks/useToggle";

export default function UseToggleDemo() {
  const [open, toggle, setOpen] = useToggle(false);

  return (
    <div className="card">
      <p className="muted">useToggle → perfect for show/hide.</p>

      <div className="row">
        <button className="btn primary" onClick={toggle}>
          {open ? "Hide" : "Show"} Box
        </button>
        <button className="btn" onClick={() => setOpen(true)}>
          Force Open
        </button>
        <button className="btn" onClick={() => setOpen(false)}>
          Force Close
        </button>
      </div>

      {open && (
        <div className="result">
          ✅ I am visible now. Click toggle to hide me.
        </div>
      )}
    </div>
  );
}
