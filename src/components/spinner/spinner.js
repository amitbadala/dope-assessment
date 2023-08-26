import React, { useState } from "react";
import "./Spinner.css";

function Spinner() {
  const [spinning, setSpinning] = useState(true);

  return (
    <div>
      <div className={`spinner ${spinning ? "" : "paused"}`}></div>
      <button onClick={() => setSpinning(!spinning)}>Toggle Spinner</button>
    </div>
  );
}

export default Spinner;
