import React, { Component } from "react";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";

export class Navigation extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavLogin />
          <NavContent />
          <Switch>
            <Route path="/About" component={About} />
            <Route path="/Contact" component={Contact} />
            <Route path="/Portfolio" component={Portfolio} />
            <Route path="/" component={FrontPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Navigation;
