import React, { Component } from "react";
import CustomInput from "../components/input/CustomInput";
import CustomButton from "../components/button/CustomButton";

import { login } from "../actions/action";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };
  login = () => {
    this.props.login(this.state);
  };
  render() {
    const { email, password } = this.state;
    return (
      <div className="login-page">
        <CustomInput
          title="Email"
          value={email}
          type="email"
          setValue={val => this.setState({ email: val })}
        />
        <CustomInput
          title="Password"
          value={password}
          type="password"
          setValue={val => this.setState({ password: val })}
        />
        <CustomButton text="Login" setClick={this.login} />
      </div>
    );
  }
}
Login.propTypes = {
  login: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  login
};

export default connect(
  null,
  mapDispatchToProps
)(Login);
