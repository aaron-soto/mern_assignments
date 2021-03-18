import "./App.css";

import { Router } from "@reach/router";

import Home from "./views/Home";
import Number from "./views/Number";
import Word from "./views/Word";
import ColorWord from "./views/ColorWord";

function App() {
  return (
    <div className="container ">
      <div className="my-5">
        <Router>
          <Home path="/" />
          <Number path="/:num" />
          <Word path="/:word" />
          <ColorWord path="/:word/:textColor/:bgColor" />
        </Router>
      </div>
    </div>
  );
}

export default App;
