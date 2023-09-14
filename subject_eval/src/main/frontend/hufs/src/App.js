import logo from './logo.svg';
import './App.css';
import Post from './components/Post.js';
import View from './components/View.js';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        {/* Post 컴포넌트 추가 */}
        <Post />
      </div>
  );
}

export default App;
