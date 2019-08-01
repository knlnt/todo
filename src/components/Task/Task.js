import React from "react";
import "./Task.css";

const Task = ({ task, onClick }) => {
  const { id, done, name } = task;
  return (
    <li key={id} onClick={() => onClick(id)} className={done ? "endTask" : ""}>
      {name}
    </li>
  );
};

export default Task;
