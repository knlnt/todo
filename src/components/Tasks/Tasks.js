import React from "react";
import PropTypes from "prop-types";
import Task from "./../Task/Task";
import { TASK_TYPE } from "./../../types";
import "./Tasks.css";

const Tasks = ({ tasks, onClick }) => {
  return (
    <ul>
      {tasks.map(task => (
        <Task key={task.id} task={task} onClick={onClick} />
      ))}
    </ul>
  );
};

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape(TASK_TYPE)),
  onClick: PropTypes.func
};

export default Tasks;
