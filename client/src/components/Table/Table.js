import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import styled from 'styled-components'
import { connect } from "react-redux";
import { getUsers, deleteUser } from '../../actions/action';
import PropTypes from "prop-types";
import CustomButton from "../button/CustomButton";
import EditUserModal from '../Modal/EditUserModal';
import * as CONSTANT from "../../constant";

class MyTable extends Component {
  componentDidMount() {
    this.props.getUsers()
  }
  editModal(elem) {
    const { openEditWindow, editUserObj } = this.props
    openEditWindow(true)
    editUserObj(elem)
  }
  render() {
    const { workers, deleteUser, openEditModal, openEditWindow } = this.props
    return (
      <Div>
        <Table striped bordered hover>
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
                  <TD>
                    <CustomButton text="Edit" setClick={() => this.editModal(item)} />
                    <CustomButton text="Remove" setClick={() => deleteUser(item._id)} />
                  </TD>
                </tr>
              )
            })}
          </tbody>
        </Table>
        {openEditModal && <EditUserModal open={openEditModal} close={() => openEditWindow(false)} />}
      </Div>
    );
  }
}
const mapStateToProps = store => {
  return {
    workers: store.workers,
    openEditModal: store.openEditModal
  }
}
const mapDispatchToProps = dispatch => {
  return {
    openEditWindow: open => dispatch({ type: CONSTANT.OPEN_EDIT_MODAL, payload: open }),
    editUserObj: obj => dispatch({ type: CONSTANT.EDIT_USER_OBJECT, payload: obj }),
    getUsers: () => dispatch(getUsers()),
    deleteUser: id => dispatch(deleteUser(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyTable);

const Div = styled.div`margin-top:20px;`
const TD = styled.td`display:flex`
MyTable.propTypes = {
  getUsers: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired
}