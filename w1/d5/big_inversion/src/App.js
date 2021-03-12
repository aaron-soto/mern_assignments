import PersonCard from "./components/PersonCard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <PersonCard
        firstName="Johnny"
        lastName="Bravo"
        age={30}
        hairColor="Yellow"
      />
      <PersonCard firstName="John" lastName="Doe" age={25} hairColor="Brown" />
      <PersonCard firstName="Jane" lastName="Doe" age={18} hairColor="Blonde" />
      <PersonCard
        firstName="Johnny"
        lastName="Bravo"
        age={30}
        hairColor="Yellow"
      />
    </div>
  );
}

export default App;
