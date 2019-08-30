import React, { Component } from "react";
import { Link } from "react-router-dom";
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
        <div className="template-children">{this.props.children}</div>
      </div>
    );
  }
}

export default Template;
