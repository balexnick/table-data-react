import React, { Component } from "react";
import styled from "styled-components";
import CustomButton from "../button/CustomButton";
import { connect } from "react-redux";
import { getUsers } from "../../actions/action";
import { withRouter } from "react-router";
import { browserHistory } from "../../index";

class Pagination extends Component {
  previousPage = () => {
    let { page, getUsers, pages } = this.props;
    if (page <= 1) {
      getUsers({ page: pages });
    } else {
      getUsers({ page: (page -= 1) });
    }
  };
  generatePagination = () => {
    const { page, pages } = this.props;
    let arr = Array.from(Array(pages), (x, index) => index + 1);
    if (pages > 5) {
      if (page <= 4) {
        arr = arr.slice(0, 4);
        arr.push("...");
        arr.push(pages);
      } else if (page >= 3 && page < pages - 3) {
        arr = [];
        arr.push(1);
        arr.push("...");
        arr.push(page - 1, page, page + 1);
        arr.push("...");
        arr.push(pages);
      } else if (page >= pages - 3) {
        arr = arr.slice(pages - 4);
        arr.unshift("...");
        arr.unshift(1);
      }
    }
    return arr.map((item, i) => {
      if (item === page) {
        return (
          <Paginate active key={i} onClick={() => this.handleClickPage(item)}>
            <span>{item}</span>
          </Paginate>
        );
      } else if (item === "...") {
        return (
          <Paginate key={i}>
            <span>...</span>
          </Paginate>
        );
      }
      return (
        <Paginate key={i} onClick={() => this.handleClickPage(item)}>
          <span>{item}</span>
        </Paginate>
      );
    });
  };
  componentDidMount() {
    let pageAfterReload = +this.props.match.params.page;
    this.props.getUsers({ page: pageAfterReload });
  }
  handleClickPage = i => {
    browserHistory.push(`/${i}`);
    this.props.getUsers({ page: i });
  };
  render() {
    let { page, getUsers } = this.props;
    return (
      <Div>
        <CustomButton text="Prev" setClick={this.previousPage} />
        {this.generatePagination()}
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
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Pagination)
);

const Div = styled.div`
  display: flex;
  justify-content: center;
`;

const Paginate = styled.div`
  background: ${props => (props.active ? "#545b62" : "#17a2b8;")};
  margin: 0 5px;
  padding: 5px 15px;
  border-radius: 4px;
  cursor: pointer;
  color: #fff;
`;
