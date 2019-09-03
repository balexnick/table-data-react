import React, { Component } from "react";
import CustomInput from "../components/input/CustomInput";
import CustomButton from "../components/button/CustomButton";
import ErrorComponent from "../components/Error/ErrorComponent";
import { login } from "../actions/action";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };
  render() {
    const { error, login } = this.props;
    const { email, password } = this.state;
    return (
      <Div>
        <LoginDiv>
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
            text="Login"
            setClick={() => login(this.state)}
            marginTop={true}
          />
        </LoginDiv>
      </Div>
    );
  }
}
Login.propTypes = {
  login: PropTypes.func.isRequired
};
const mapStaToToProps = store => {
  return {
    error: store.errorMessage
  };
};
const mapDispatchToProps = {
  login
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
  mapStaToToProps,
  mapDispatchToProps
)(Login);
