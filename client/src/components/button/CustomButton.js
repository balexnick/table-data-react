import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const CustomButton = ({ text, setClick, marginTop, error, primary }) => {
  if (marginTop) {
    return (
      <Button onClick={setClick} marginTop>
        {text}
      </Button>
    );
  } else if (error) {
    return (
      <Button onClick={setClick} error>
        {text}
      </Button>
    );
  } else if (primary) {
    return (
      <Button onClick={setClick} primary>
        {text}
      </Button>
    );
  }
  return <Button onClick={setClick}>{text}</Button>;
};

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  setClick: PropTypes.func.isRequired
};
export default CustomButton;
const Button = styled.button`
  outline: none;
  text-decoration: none;
  background: ${props =>
    props.error ? "#dc3545  " : props.primary ? "#007afe" : " #17a2b8"};
  color: #fff;
  padding: 5px 15px;
  border-radius: 4px;
  margin: 0 5px;
  padding: 5px 25px;
  border: none;
  cursor: pointer;
  margin-top: ${props => (props.marginTop ? "25px" : "0px")};
`;
