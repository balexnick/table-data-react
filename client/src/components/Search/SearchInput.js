import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { getUsers } from "../../actions/action";
class SearchInput extends Component {
  state = {
    value: ""
  };
  handlerChange = e => {
    this.setState({ value: e });
    setTimeout(() => {
      this.props.getUsers({ q: this.state.value });
    }, 500);
  };

  render() {
    const { value } = this.state;
    return (
      <Input
        type="text"
        placeholder="Search"
        value={value}
        onChange={e => this.handlerChange(e.target.value)}
      />
    );
  }
}
const mapDispatchToProps = {
  getUsers
};
export default connect(
  null,
  mapDispatchToProps
)(SearchInput);

const Input = styled.input`
  outline: none;
  padding: 5px;
  border-radius: 5px;
  border: 2px solid #d4daea;
`;
