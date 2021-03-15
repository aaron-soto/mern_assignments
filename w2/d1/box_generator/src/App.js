import React, { useState } from "react";
import BoxGenerator from "./components/BoxGenerator";
import Box from "./components/Box";
import "./App.css";

function App() {
  const [boxes, setBoxes] = useState([]);

  const addBox = (newBox) => {
    setBoxes([...boxes, newBox]);
  };

  return (
    <div className="App">
      <BoxGenerator onNewBox={addBox} />
      <Box boxes={boxes} />
    </div>
  );
}

export default App;
