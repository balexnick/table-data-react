import React, { Component } from "react";
import CustomButton from "../components/button/CustomButton";
import styled from "styled-components";
import CreateUserModal from "../components/Modal/CreateUserModal";
import MyTable from "../components/Table/Table";
import { connect } from "react-redux";
import * as CONSTANT from "../constant";
import SearchInput from "../components/Search/SearchInput";
class HomePage extends Component {
  render() {
    const { openModal, isOpen } = this.props;
    return (
      <div className="template-children">
        <MainDiv>
          <Div>
            <SearchInput />
            <CustomButton text="Add user" setClick={() => openModal(true)} />
          </Div>
          <CreateUserModal close={() => openModal(false)} open={isOpen} />
          <MyTable />
        </MainDiv>
      </div>
    );
  }
}
const mapStateToProps = store => {
  return {
    isOpen: store.isOpen
  };
};
const mapDispatchToProps = dispatch => {
  return {
    openModal: open => dispatch({ type: CONSTANT.OPEN_MODAL, payload: open })
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
