import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import CustomButton from "../button/CustomButton";
import CustomInput from "../input/CustomInput";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";
import { createUser } from "../../actions/action";
import { ToastContainer } from "react-toastify";

class CreateUserModal extends Component {
  state = {
    firstName: "",
    lastName: "",
    gender: "",
    contactInformation: "",
    salary: "",
    position: ""
  };
  createNewUser = () => {
    const {
      firstName,
      lastName,
      gender,
      contactInformation,
      salary,
      position
    } = this.state;

    const data = {
      firstName,
      lastName,
      gender,
      contactInformation,
      salary,
      position
    };
    this.props.createUser(data);
    if (
      firstName &&
      lastName &&
      gender &&
      contactInformation &&
      salary &&
      position
    ) {
      this.setState({
        firstName: "",
        lastName: "",
        gender: "",
        contactInformation: "",
        salary: "",
        position: ""
      });
    }
  };

  render() {
    const { close, open } = this.props;
    const {
      firstName,
      lastName,
      gender,
      contactInformation,
      salary,
      position
    } = this.state;
    return (
      <div>
        <Modal show={open} onHide={close} centered>
          <Modal.Header closeButton>
            <Modal.Title>Add user</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Div>
              <CustomInput
                title="First name"
                value={firstName}
                type="text"
                setValue={val => this.setState({ firstName: val })}
              />
              <CustomInput
                title="Last name"
                value={lastName}
                type="text"
                setValue={val => this.setState({ lastName: val })}
              />
              <CustomInput
                title="Gender"
                value={gender}
                type="text"
                setValue={val => this.setState({ gender: val })}
              />
              <CustomInput
                title="Contact Information"
                value={contactInformation}
                type="text"
                setValue={val => this.setState({ contactInformation: val })}
              />
              <CustomInput
                title="Salary"
                value={salary}
                type="text"
                setValue={val => this.setState({ salary: val })}
              />
              <CustomInput
                title="Position"
                value={position}
                type="text"
                setValue={val => this.setState({ position: val })}
              />
            </Div>
            <ToastContainer autoClose={2000} />
          </Modal.Body>
          <Modal.Footer>
            <CustomButton
              text="Save"
              setClick={this.createNewUser}
              primary={true}
            />
            <CustomButton text="Close" setClick={close} error={true} />
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

CreateUserModal.propTypes = {
  close: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};
const Div = styled.div`
  display: flex;
  flex-direction: column
  align-items: center
`;

const mapDispatchToProps = dispatch => {
  return {
    createUser: data => dispatch(createUser(data))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(CreateUserModal);
