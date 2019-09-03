import React, { Component } from "react";
import { Table } from "react-bootstrap";
import styled from "styled-components";
import { connect } from "react-redux";
import { getUsers, deleteUser } from "../../actions/action";
import PropTypes from "prop-types";
import CustomButton from "../button/CustomButton";
import EditUserModal from "../Modal/EditUserModal";
import Pagination from "../Pagination/Pagination";
import * as CONSTANT from "../../constant";
class MyTable extends Component {
  // componentDidMount() {
  //   this.props.getUsers();
  // }
  editModal(elem) {
    const { openEditWindow, editUserObj } = this.props;
    openEditWindow(true);
    editUserObj(elem);
  }
  closeModal = () => {
    const { openEditWindow, clearError } = this.props;
    openEditWindow(false);
    clearError();
  };
  render() {
    const { workers, deleteUser, openEditModal } = this.props;
    return (
      <Div>
        <Table bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>Contact Information</th>
              <th>Salary</th>
              <th>Position</th>
              <th>Edit/Remove</th>
            </tr>
          </thead>
          <tbody>
            {workers.map((item, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.gender}</td>
                  <td>{item.contactInformation}</td>
                  <td>{item.salary}</td>
                  <td>{item.position}</td>
                  <td>
                    <CustomButton
                      text="Edit"
                      setClick={() => this.editModal(item)}
                      primary={true}
                    />
                    <CustomButton
                      text="Remove"
                      setClick={() => deleteUser(item._id)}
                      error={true}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <Pagination />
        {openEditModal && (
          <EditUserModal open={openEditModal} close={this.closeModal} />
        )}
      </Div>
    );
  }
}
const mapStateToProps = store => {
  return {
    workers: store.workers,
    openEditModal: store.openEditModal
  };
};
const mapDispatchToProps = dispatch => {
  return {
    openEditWindow: open =>
      dispatch({ type: CONSTANT.OPEN_EDIT_MODAL, payload: open }),
    editUserObj: obj =>
      dispatch({ type: CONSTANT.EDIT_USER_OBJECT, payload: obj }),
    getUsers: () => dispatch(getUsers()),
    deleteUser: id => dispatch(deleteUser(id)),
    clearError: () => dispatch({ type: CONSTANT.ERROR_MESSAGE, payload: "" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyTable);

const Div = styled.div`
  margin-top: 20px;
`;
MyTable.propTypes = {
  getUsers: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired
};
