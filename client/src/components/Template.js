import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

class Template extends Component {
  state = {};
  showhomePageOrLogin = () => {
    const token = localStorage.getItem("token");
    if (token) {
      return (
        <div className="template-link-container">
          <Link to="/">Home</Link>
          <Link to="/logout">Logout</Link>
        </div>
      );
    }
    return (
      <div className="template-link-container">
        <Link to="/login">Login</Link>
        <Link to="/signUp">Sign up</Link>
      </div>
    );
  };
  render() {
    return (
      <div>
        <div className="template-container">{this.showhomePageOrLogin()}</div>
        <Div>{this.props.children}</Div>
      </div>
    );
  }
}

const Div = styled.div`
  width: 70vw;
  margin: 60px auto 0;
`;

export default Template;
