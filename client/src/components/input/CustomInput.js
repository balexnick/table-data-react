import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components'

const CustomInput = ({ title, value, type, setValue }) => {
  return (
    <Div>
      <h3>{title}</h3>
      <Input
        className="custom-input"
        value={value}
        type={type}
        onChange={e => setValue(e.target.value)}
      />
    </Div>
  );
};

CustomInput.propTypes = {
  title: PropTypes.string.isRequired,
  // value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired
};
const Div = styled.div`text-align:center`
const Input = styled.input`
  outline: none;
  padding: 5px;
  border-radius: 5px;
  border: 2px solid #d4daea;
`
export default CustomInput;
