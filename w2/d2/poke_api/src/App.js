import "./App.css";

import { Link, Router } from "@reach/router";

import Homepage from "./views/Homepage";
import PokeMain from "./views/PokeMain";

function App() {
  return (
    <div className="container">
      <div className="d-flex justify-content-center mt-5">
        <Link className="btn btn-dark" to="/all_pokemon">
          Fetch Pokemon
        </Link>
      </div>

      <Router>
        <Homepage path="/" />
        <PokeMain path="/all_pokemon" />
      </Router>
    </div>
  );
}

export default App;
