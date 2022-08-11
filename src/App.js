import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <button href="#" className="btn btn-primary">
            Dictionary
          </button>
        </header>
        <Dictionary />
        <footer className="App-footer">
          <small>code by SheCodes</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
