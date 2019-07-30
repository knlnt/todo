import React from "react";
import "./Task.css";

const Task = props => {
  const { task, handleClickTask } = props;
  const { id, done, name } = task;
  return (
    <li
      key={id}
      onClick={() => handleClickTask(id, 2)}
      className={done ? "endTask" : ""}
    >
      {name}
    </li>
  );
};

export default Task;
