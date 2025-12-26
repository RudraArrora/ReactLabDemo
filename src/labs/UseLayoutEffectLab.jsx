import { useLayoutEffect, useRef, useState } from "react";

export default function UseLayoutEffectLab() {
  const boxRef = useRef(null);
  const [w, setW] = useState(0);

  useLayoutEffect(() => {
    const el = boxRef.current;
    if (!el) return;

    const measure = () => setW(Math.round(el.getBoundingClientRect().width));
    measure();

    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <div className="card">
      <p className="muted">
        useLayoutEffect measures DOM before paint (avoids flicker).
      </p>
      <div ref={boxRef} className="measureBox">
        Width: <b>{w}px</b>
      </div>
    </div>
  );
}
