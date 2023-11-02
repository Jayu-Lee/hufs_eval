import logo from './logo.svg';
import React from "react";
import {BrowserRouter as Routes, Route, Switch} from "react-router-dom"
import './App.css';
import Post from './components/Post.js';
import View from './components/View.js';
import Test from './components/Test.js';
import Article from './components/Article.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/post">Post</Link>
        <br />
        <Link to="/view">View</Link>
        <br />
        <Link to="/test">Test</Link>
      </nav>
      <Router>
        <Switch>
          <Route path="/post" exact component={Post} />
          <Route path="/view" exact component={View} />
          <Route path="/test" exact component={Test} />
          <Route path="/article/:id" component={Article} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
