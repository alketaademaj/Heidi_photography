import './App.css';
import React from 'react';
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

//Link uses client side routing so you're not reloading the entire application 

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/About" component={About}></Route>
          <Route path="/Portfolio" component={Portfolio}></Route>
          <Route Path="/Contact" component={Contact}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
