import { memo, useCallback, useState } from "react";

const Child = memo(function Child({ label, onAdd }) {
  console.log(`Child render -> ${label}`);
  return (
    <button className="btn primary" onClick={onAdd}>
      {label}
    </button>
  );
});

export default function UseCallbackDifference() {
const [count,setCount]=useState(0);
const [text,setText]=useState("");
  


const addStable = useCallback(()=>{
  setCount((c)=>c+1);
},[])

const addNormal=()=>{
  setCount((c)=>c+1);
}

  //

  return (
    <div className="card">
      <p className="muted">
        Type in the input. Parent re-renders. Check console:
        <b> Stable child won’t re-render</b>, normal child will.
      </p>

      <div className="row">
        {/**/}
        <input className="input" 
        value={text}
        placeholder="Type here"
        onChange={(e)=>setText(e.target.value)}/>
      </div>

      <div className="row" style={{ justifyContent: "space-between" }}>
        <div className="big">Count: {count}</div>
      </div>

      <div className="row">
        {/**/}
        <Child label="Add (useCallback ✅)" onAdd={addStable} />
        <Child label="Add (normal ❌)" onAdd={addNormal} />
      </div>

      <div className="result muted">
        Both buttons increase count, but <b>normal</b> creates a new function on
        every render, so its memo child keeps re-rendering. <b>useCallback</b>{" "}
        keeps the function same, so that child stays stable.
      </div>
    </div>
  );
}
