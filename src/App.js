import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WordFinder from "./WordFinder.js";

export default function App() {
  return (
    <div className="App">
      <header className="App-header border">
        <h1 className="heading">Dictionary</h1>
      </header>
      <div className="container">
        <WordFinder defaultKeyword="beautiful" />
      </div>
      <footer>
        This project was coded by{" "}
        <a
          href="https://www.linkedin.com/in/busi-doreen-b2a17a38"
          target="_blank"
          rel="noreferrer"
          className="footer-link"
        >
          Busi Shumba
        </a>{" "}
        and is {""}
        <a
          href="https://github.com/DBusie/weather-app-react"
          target="_blank"
          rel="noreferrer"
          className="footer-link"
        >
          open-sourced
        </a>{" "}
        on Github and hosted on{" "}
        <a
          href="https://voluble-bubblegum-59654e.netlify.app/"
          alt="netlify-link"
          target="_blank"
          rel="noreferrer"
          className="footer-link"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}
