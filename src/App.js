import "./App.css";
import Dictionary from "./Dictionary";
import logo from "./logo.png";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <Dictionary defaultKeyword="sunset" />
        <footer className="App-footer">
          <small>code by SheCodes</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
