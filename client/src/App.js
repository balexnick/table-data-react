import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router";

import Login from "./containers/Login";
import HomePage from "./containers/HomePage";
import SignUp from "./containers/SignUp";
import Logout from "./containers/Logout";

import Template from "./components/Template";

// import { getToken } from "./utils/getToken";

class App extends Component {
  isToken = component => {
    const token = localStorage.getItem("token");
    if (!token) return <Redirect to="/login" />;

    return <Template>{component}</Template>;
  };

  notToken = component => {
    const token = localStorage.getItem("token");
    if (token) return <Redirect to="/" />;

    return <Template>{component}</Template>;
  };

  render() {
    return (
      <Switch>
        <Route path="/login" render={() => this.notToken(<Login />)} />
        <Route path="/signup" render={() => this.notToken(<SignUp />)} />
        <Route path="/logout" render={() => this.isToken(<Logout />)} />
        <Route path="/" render={() => this.isToken(<HomePage />)} />
      </Switch>
    );
  }
}

export default App;
