import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import CustomButton from "../button/CustomButton";
import CustomInput from "../input/CustomInput";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";
import { editUser } from "../../actions/action";
import ErrorComponent from "../Error/ErrorComponent";
class EditUserModal extends Component {
  constructor(props) {
    super();
    const {
      firstName,
      lastName,
      gender,
      contactInformation,
      salary,
      position,
      _id
    } = props.editUserObj;
    this.state = {
      firstName,
      lastName,
      gender,
      contactInformation,
      salary,
      position,
      id: _id
    };
  }
  editUser = () => {
    const { editUser } = this.props;
    editUser(this.state);
  };
  render() {
    const { close, open, error } = this.props;
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
              {error && <ErrorComponent errorMessage={error} />}
            </Div>
          </Modal.Body>
          <Modal.Footer>
            <CustomButton text="Save" setClick={this.editUser} primary={true} />
            <CustomButton text="Close" setClick={close} error={true} />
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

EditUserModal.propTypes = {
  close: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  editUserObj: PropTypes.object.isRequired
};
const Div = styled.div`
  display: flex;
  flex-direction: column
  align-items: center
`;
const mapStateToProps = store => {
  return {
    editUserObj: store.editUserObj,
    error: store.errorMessage
  };
};
const mapDispatchToProps = {
  editUser
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditUserModal);
