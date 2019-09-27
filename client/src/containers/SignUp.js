import React, { Component } from "react";
import CustomInput from "../components/input/CustomInput";
import CustomButton from "../components/button/CustomButton";
import { connect } from "react-redux";
import { register } from "../actions/action";
import styled from "styled-components";
import { ToastContainer } from "react-toastify";

class SignUp extends Component {
  state = {
    name: "",
    email: "",
    password: ""
  };
  render() {
    const { name, email, password } = this.state;
    const { register } = this.props;
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
          <ToastContainer autoClose={2000} />
          <CustomButton
            text="Sign up"
            setClick={() => register(this.state)}
            marginTop={true}
          />
        </LoginDiv>
      </Div>
    );
  }
}
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
  null,
  mapDispatchToProps
)(SignUp);
