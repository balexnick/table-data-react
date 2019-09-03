import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Redirect, withRouter } from "react-router";
import { connect } from "react-redux";
import * as CONSTANT from "./constant";

import Login from "./containers/Login";
import HomePage from "./containers/HomePage";
import SignUp from "./containers/SignUp";
import Logout from "./containers/Logout";

import Template from "./components/Template";

class App extends Component {
  componentDidMount() {
    const token = JSON.parse(localStorage.getItem("token"));
    this.props.saveToken(token);
  }
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
        <Route path="/:page" render={() => this.isToken(<HomePage />)} />
        <Route path="/" exact render={() => this.isToken(<HomePage />)} />
      </Switch>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    saveToken: token => dispatch({ type: CONSTANT.TOKEN, payload: token })
  };
};
export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
);
