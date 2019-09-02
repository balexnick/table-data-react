import React, { Component } from "react";
import CustomInput from "../components/input/CustomInput";
import CustomButton from "../components/button/CustomButton";
import ErrorComponent from "../components/Error/ErrorComponent";
import { connect } from "react-redux";
import { register } from "../actions/action";
import styled from "styled-components";

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
    const { error } = this.props;
    return (
      <Div>
        <LoginDiv>
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
          {error && <ErrorComponent errorMessage={error} />}
          <CustomButton
            text="Sign up"
            setClick={this.signUp}
            marginTop={true}
          />
        </LoginDiv>
      </Div>
    );
  }
}
const mapStatoToProps = store => {
  return {
    error: store.errorMessage
  };
};
const mapDispatchToProps = {
  register
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const LoginDiv = styled.div`
  background: #eee;
  padding: 25px;
  border-radius: 4px;
  text-align: center;
`;
export default connect(
  mapStatoToProps,
  mapDispatchToProps
)(SignUp);
