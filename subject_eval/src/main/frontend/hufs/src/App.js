import logo from './logo.svg';
import React from "react";
import {Routes, Route, Link} from "react-router-dom"
import './App.css';
import Post from './components/Post.js';
import View from './components/View.js';

function App() {
  return (
      <div className="App">
          <nav>
              <Link to="/post">Post</Link>
              <Link to="/view">View</Link>
          </nav>
          <Routes>
              <Route path="/post" element={<Post />}/>
          </Routes>
          <Routes>
              <Route path="/view" element={<View />}/>
          </Routes>
      </div>
  );

}

export default App;
