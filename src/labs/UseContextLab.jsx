import { createContext, useContext, useState } from "react";

const MoodContext = createContext(null);

function MoodPreview() {
  const { mood } = useContext(MoodContext);
  return (
    <div className="result">
      Mood from context: <b>{mood}</b>
    </div>
  );
}

export default function UseContextLab() {
  const [mood, setMood] = useState("Chill");

  return (
    <div className="card">
      <p className="muted">useContext reads values without prop drilling.</p>

      <MoodContext.Provider value={{ mood }}>
        <div className="row">
          <button className="btn" onClick={() => setMood("Chill")}>
            Chill
          </button>
          <button className="btn primary" onClick={() => setMood("Hype")}>
            Hype
          </button>
          <button className="btn" onClick={() => setMood("Focus")}>
            Focus
          </button>
        </div>
        <MoodPreview />
      </MoodContext.Provider>
    </div>
  );
}
