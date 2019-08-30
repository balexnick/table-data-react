import React, { Component } from "react";
import CustomInput from "../components/input/CustomInput";
import CustomButton from "../components/button/CustomButton";
import { connect } from "react-redux";
import { register } from "../actions/action";

class SignUp extends Component {
  state = {
    name: "",
    email: "",
    password: ""
  };
  signUp = () => {
    console.log(this.state);
    this.props.register(this.state);
  };
  render() {
    const { name, email, password } = this.state;
    return (
      <div className="login-page">
        <CustomInput
          title="Name"
          value={name}
          type="name"
          setValue={val => this.setState({ name: val })}
        />
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
        <CustomButton text="Sign up" setClick={this.signUp} />
      </div>
    );
  }
}

const mapDispatchToProps = {
  register
};

export default connect(
  null,
  mapDispatchToProps
)(SignUp);
