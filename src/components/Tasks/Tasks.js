import React from "react";
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

export default Tasks;
