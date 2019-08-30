import React from "react";
import PropTypes from "prop-types";

const CustomInput = ({ title, value, type, setValue }) => {
  return (
    <div>
      <h3>{title}</h3>
      <input
        className="custom-input"
        value={value}
        type={type}
        onChange={e => setValue(e.target.value)}
      />
    </div>
  );
};

CustomInput.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired
};

export default CustomInput;
