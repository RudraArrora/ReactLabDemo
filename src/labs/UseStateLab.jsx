import { useState } from "react";

export default function UseStateLab() {
  const [count,setCount]=useState(0);
  const [name,setName]= useState("");
  console.log("Hey you just re-rendered the component")
  return (
    <div className="card">
      <p className="muted">useState → UI updates when state changes.</p>

      <div className="row">
        {/*  */}
        <button className="btn" onClick={()=>setCount((c)=>c-1)}>-</button>
        {/*  */}
        <div className="big">{count}</div>
        {/*  */}
        <button className="btn primary" onClick={()=>setCount((c)=>c+1)}>+</button>
      </div>

      <div className="row">
        {/*  */}
        <input className="input" 
        value={name}
        onChange={(e)=>setName(e.target.value)}
        placeholder="Type your name ......"/>
      </div>
      {/*  */}
      <div className="result">
        Hello, <b>{name|| "No Name"}</b> 👋
      </div>
    </div>
  );
}
