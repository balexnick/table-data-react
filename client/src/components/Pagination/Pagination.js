import React, { Component } from "react";
import styled from "styled-components";
import CustomButton from "../button/CustomButton";
import { connect } from "react-redux";
import { getUsers } from "../../actions/action";

class Pagination extends Component {
  // state = {
  //   arr: new Array(5)
  // };
  previousPage = () => {
    let { page, getUsers, pages } = this.props;
    if (page <= 1) {
      getUsers({ page: pages });
    } else {
      getUsers({ page: (page -= 1) });
    }
  };
  render() {
    let { page, getUsers } = this.props;
    // const { arr } = this.state;
    // console.log(pages);

    return (
      // <div>
      //   {/* {arr.map(item => {
      //     return <div>dfsdfsdfsdsd</div>;
      //   })} */}
      // </div>
      <Div>
        <CustomButton text="Prev" setClick={this.previousPage} />

        <span>{page}</span>
        <CustomButton
          text="Next"
          setClick={() => getUsers({ page: (page += 1) })}
        />
      </Div>
    );
  }
}
const mapStateToProps = store => {
  return {
    page: store.page,
    pages: store.pages
  };
};
const mapDispatchToProps = {
  getUsers
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination);

const Div = styled.div`
  display: flex;
  justify-content: center;
`;
