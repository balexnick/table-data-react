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
    console.log(this.props);
    const token = JSON.parse(localStorage.getItem("token"));
    this.props.saveToken(token);
  }
  isAuth = component => {
    const token = localStorage.getItem("token");
    if (!token) return <Redirect to="/login" />;
    return <Template>{component}</Template>;
  };

  notAuth = component => {
    const token = localStorage.getItem("token");
    if (token) return <Redirect to="/" />;
    return <Template>{component}</Template>;
  };

  render() {
    return (
      <Switch>
        <Route path="/login" render={() => this.notAuth(<Login />)} />
        <Route path="/signup" render={() => this.notAuth(<SignUp />)} />
        <Route path="/logout" render={() => this.isAuth(<Logout />)} />
        <Route path="/:page" render={() => this.isAuth(<HomePage />)} />
        <Route path="/" exact render={() => this.isAuth(<HomePage />)} />
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
