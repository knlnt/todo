import React from "react";
import PropTypes from "prop-types";
import "./Btn.css";

function Btn({ value, onClick }) {
  return (
    <input className="btn" type="button" value={value} onClick={onClick} />
  );
}

Btn.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func
};

export default Btn;
