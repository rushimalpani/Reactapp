import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
Assognment No: 5       </p>
        <a
          className="App-link"
          href="https://www.vit.edu/"
          // target="_blank"
          target="_self"
          rel="noopener noreferrer"
        >
          VIT Pune
        </a>
      </header>
    </div>
  );
}

export default App;
