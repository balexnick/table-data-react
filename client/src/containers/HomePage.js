import React, { Component } from "react";
import CustomButton from "../components/button/CustomButton";
import styled from "styled-components";
import CreateUserModal from "../components/Modal/CreateUserModal";
import MyTable from "../components/Table/Table";
import { connect } from "react-redux";
import * as CONSTANT from "../constant";

class HomePage extends Component {
  closeModal = () => {
    const { openWindow, clearError } = this.props;
    openWindow(false);
    clearError();
  };
  render() {
    const { openWindow, modal } = this.props;
    return (
      <div className="template-children">
        <MainDiv>
          <Div>
            <input type="text" />
            <CustomButton text="Add user" setClick={() => openWindow(true)} />
          </Div>
          <CreateUserModal close={this.closeModal} open={modal} />
          <MyTable />
        </MainDiv>
      </div>
    );
  }
}
const mapStateToProps = store => {
  return {
    modal: store.openModal
  };
};
const mapDispatchToProps = dispatch => {
  return {
    openWindow: open => dispatch({ type: CONSTANT.OPEN_MODAL, payload: open }),
    clearError: () => dispatch({ type: CONSTANT.ERROR_MESSAGE, payload: "" })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);

const MainDiv = styled.div`
  width: 100%;
`;
const Div = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
