import "./App.css";
import { Router } from "@reach/router";

import ApiWalker from "./views/ApiWalker";
import PeoplePage from "./views/PeoplePage";
import PlanetPage from "./views/PlanetPage";

function App() {
  return (
    <div className="container">
      <Router>
        <ApiWalker path="/" />
        <PeoplePage path="/people/:id" />
        <PlanetPage path="/planets/:id" />
      </Router>
    </div>
  );
}

export default App;
