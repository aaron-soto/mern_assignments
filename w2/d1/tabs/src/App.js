import logo from "./logo.svg";
import React, { useState } from "react";
import Tabs from "./components/Tabs";
import "./App.css";

function App() {
  const [boxes, setBoxes] = useState([]);
  const tabsProps = {
    tabs: [
      { label: "Tab 1", content: "This is tab 1 content" },
      { label: "Tab 2", content: "This is tab 2 content" },
      { label: "Tab 3", content: "This is tab 3 content" },
    ],
  };
  return (
    <div className="App">
      <Tabs tabs={tabsProps.tabs} />
    </div>
  );
}

export default App;
