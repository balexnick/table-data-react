import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components'


const CustomButton = ({ text, setClick, color }) => {
  return (
    <Button onClick={setClick} >
      {text}
    </Button>
  );
};

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  setClick: PropTypes.func.isRequired,
};
export default CustomButton;
const Button = styled.button`
  outline: none;
  text-decoration: none;
  background: #d4daea;
  color: #000;
  padding: 5px 15px;
  border-radius: 35px;
  margin: 0 5px;
  padding: 5px 25px;
  border: none;
  cursor: pointer;
`