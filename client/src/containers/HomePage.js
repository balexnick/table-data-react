import React, { Component } from "react";
import CustomButton from "../components/button/CustomButton";
import styled from 'styled-components'
import CreateUserModal from '../components/Modal/CreateUserModal'
import MyTable from '../components/Table/Table'
import { connect } from "react-redux";
import * as CONSTANT from "../constant";

class HomePage extends Component {
  render() {
    const { openWindow, openModal } = this.props
    return (
      <MainDiv >
        <Div>
          <input type="text" />
          <CustomButton text="Add user" setClick={() => openWindow(true)} />
        </Div>
        <CreateUserModal close={() => openWindow(false)} open={openModal} />
        <MyTable />
      </MainDiv>
    )
  }
}
const mapStateToProps = store => {
  return {
    openModal: store.openModal
  }
}
const mapDispatchToProps = dispatch => {
  return {
    openWindow: open => dispatch({ type: CONSTANT.OPEN_MODAL, payload: open }),
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);

const MainDiv = styled.div`width:100%`
const Div = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between
`