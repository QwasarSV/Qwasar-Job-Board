import logo from './logo.svg';
import './App.css';

function App() {
  console.log('TEST_QWASAR_COLABS_DOC:', process.env.REACT_APP_TEST_QWASAR_COLABS_DOC);
  const test_env_url = process.env.REACT_APP_TEST_QWASAR_COLABS_DOC;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href={test_env_url}
          rel="noopener noreferrer"
        >
          LET go boiii !!
        </a>
      </header>
    </div>
  );
}

export default App;
