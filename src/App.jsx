import logo from './logo.svg';
import './App.css';

function ImageContainer() {
  return (
    <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >
      <img src={logo} className="App-logo" alt="logo" />
    </a>
  );
}

function LinkContainer() {
  return (
    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
      Learn React
    </a>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ImageContainer />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <LinkContainer />
      </header>
    </div>
  );
}

export default App;
