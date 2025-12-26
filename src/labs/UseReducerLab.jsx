import { useReducer } from "react";

const initial = { status: "idle", count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "inc":
      return { ...state, count: state.count + 1 };
    case "dec":
      return { ...state, count: state.count - 1 };
    case "setStatus":
      return { ...state, status: action.status };
    default:
      return state;
  }
}

export default function UseReducerLab() {
  const [state, dispatch] = useReducer(reducer, initial);

  return (
    <div className="card">
      <p className="muted">
        useReducer = best for state machines & many transitions.
      </p>

      <div className="row">
        <button className="btn" onClick={() => dispatch({ type: "dec" })}>
          -
        </button>
        <div className="big">{state.count}</div>
        <button
          className="btn primary"
          onClick={() => dispatch({ type: "inc" })}
        >
          +
        </button>
      </div>

      <div className="row">
        <button
          className="btn"
          onClick={() => dispatch({ type: "setStatus", status: "loading" })}
        >
          Loading
        </button>
        <button
          className="btn"
          onClick={() => dispatch({ type: "setStatus", status: "success" })}
        >
          Success
        </button>
        <button
          className="btn"
          onClick={() => dispatch({ type: "setStatus", status: "error" })}
        >
          Error
        </button>
      </div>

      <div className="result">
        Status: <b>{state.status}</b>
      </div>
    </div>
  );
}
