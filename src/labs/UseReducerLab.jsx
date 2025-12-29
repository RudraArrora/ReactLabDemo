import { useReducer } from "react";

//

//

export default function UseReducerLab() {
  //
  //
  {
    /**/
  }
  return (
    <div className="card">
      <p className="muted">
        useReducer = best for state machines & many transitions.
      </p>

      <div className="row">
        {/**/}
        <button className="btn">-</button>
        {/**/}
        <div className="big"></div>
        {/**/}
        <button className="btn primary">+</button>
      </div>

      <div className="row">
        {/**/}
        <button className="btn">Loading</button>
        {/**/}
        <button className="btn">Success</button>
        {/**/}
        <button className="btn">Error</button>
      </div>

      <div className="result">
        Status: <b>{state.status}</b>
      </div>
    </div>
  );
}
