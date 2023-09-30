import logo from './logo.svg';
import React from "react";
import {Routes, Route, Link} from "react-router-dom"
import './App.css';
import Post from './components/Post.js';
import View from './components/View.js';
import Test from './components/Test.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <div className="App">
          <nav>
              <Link to="/post">Post</Link>
              <br/>
              <Link to="/view">View</Link>
              <br/>
              <Link to="/test">Test</Link>
          </nav>
          <Routes>
              <Route path="/post" element={<Post />}/>
              <Route path="/view" element={<View />}/>
              <Route path="/test" element={<Test />}/>
          </Routes>
      </div>
  );

}

export default App;
