import React from "react";
import PropTypes from "prop-types";
import "./util.css"; // Custom styling for the button

export const CBtn = ({ text, onClick, color }) => {
  return (
    <button
      className={`custom-button custom-button-${color}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

CBtn.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string,
};

CBtn.defaultProps = {
  color: "default",
};
