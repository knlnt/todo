import React from "react";
import PropTypes from "prop-types";
import { TASK_TYPE } from "./../../types";
import "./Task.css";

const Task = ({ task, onClick }) => {
  const { id, done, name } = task;
  return (
    <li key={id} onClick={() => onClick(id)} className={done ? "endTask" : ""}>
      {name}
    </li>
  );
};

Task.propTypes = {
  task: PropTypes.shape(TASK_TYPE),
  onClick: PropTypes.func
};

export default Task;
