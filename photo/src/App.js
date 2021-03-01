import './App.css';
import React from 'react';
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import PictureOne from './components/PictureOne';
import PictureTwo from './components/PictureTwo';
import PictureThree from './components/PictureThree';
import logo from './logo1.PNG'
//Link uses client side routing so you're not reloading the entire application 

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link className="color" to="/"><img alt="logo" src={logo} width="180px" height="50px"></img></Link>
            </li>
            <li>
              <Link className="color" to="/">Home</Link>
            </li>
            <li>
              <Link className="color" to="/About">About</Link>
            </li>
            <li>
              <Link className="color" to="/Portfolio">Portfolio</Link>
            </li>
            <li>
              <Link className="color" to="/Contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/About" exact component={About}></Route>
          <Route path="/Portfolio" exact component={Portfolio}></Route>
          <Route path="/PictureOne" exact component={PictureOne}></Route>
          <Route path="/PictureTwo" exact component={PictureTwo}></Route>
          <Route path="/PictureThree" exact component={PictureThree}></Route>
          <Route Path="/Contact" exact component={Contact}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
