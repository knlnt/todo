import React, { Component } from "react";
import "./Bt.css";

function Btn(props) {
  const { value, onClick } = props;

  return (
    <input className="btn" type="button" value={value} onClick={onClick} />
  );
}

export default Btn;
