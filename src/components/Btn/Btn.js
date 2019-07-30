import React from "react";
import "./Btn.css";

function Btn(props) {
  const { value, onClick } = props;

  return (
    <input className="btn" type="button" value={value} onClick={onClick} />
  );
}

export default Btn;
