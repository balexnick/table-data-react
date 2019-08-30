import React from "react";
import PropTypes from "prop-types";
const CustomButton = ({ text, setClick }) => {
  return (
    <button className="btn" onClick={setClick}>
      {text}
    </button>
  );
};

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  setClick: PropTypes.func.isRequired
};
export default CustomButton;
