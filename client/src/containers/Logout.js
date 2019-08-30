import React, { Component } from "react";
import { Redirect } from "react-router";
import * as CONSTANT from "../constant";
import { connect } from "react-redux";

class Logout extends Component {
  state = {};
  componentDidMount() {
    localStorage.removeItem("token");
  }
  render() {
    return <Redirect to="/" />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeToken: () => dispatch({ type: CONSTANT.TOKEN, payload: "" })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Logout);
