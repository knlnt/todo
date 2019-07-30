import React from "react";
import Task from "./../Task/Task";
import "./Tasks.css";

const Tasks = props => {
  return (
    <ul>
      {props.tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          handleClickTask={props.handleClickTask}
        />
      ))}
    </ul>
  );
};

export default Tasks;
