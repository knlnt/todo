import React from "react";
import PropTypes from "prop-types";
import Task from "./../Task/Task";
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
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      info: PropTypes.string,
      done: PropTypes.bool
    })
  ),
  onClick: PropTypes.func
};

export default Tasks;
