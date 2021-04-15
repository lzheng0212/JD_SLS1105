import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello! You can watch the youtube video to learn!
        </p>
        <a
          className="youtube-link"
          href="https://youtu.be/I2UBjN5ER4s"
          target="_blank"
          rel="noopener noreferrer"
        >
          We need to start!
        </a>
      </header>
    </div>
  );
}

export default App;
