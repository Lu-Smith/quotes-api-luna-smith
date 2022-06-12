import "./App.css";
import Quotes from "./Quotes";

function App() {
  return (
    <div className="App">
      <header className="App">Quotes</header>
      <Quotes />
      <footer>
        Coded by{" "}
        <a
          href="https://www.lunasmithart.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          Luna Smith
        </a>
        , open source on{" "}
        <a
          href="https://github.com/Lu-Smith/quotes-api-luna-smith"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
