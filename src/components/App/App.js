import React, { Component } from "react";
import "./App.css";
import TaskManager from "../Form/TaskManager";
import Tasks from "./../Tasks/Tasks";
import { TYPE_TASK_MANAGER } from "./../../consts";

class App extends Component {
  state = {
    typeTaskManager: TYPE_TASK_MANAGER.newTask,
    tasks: [],
    currentTask: null
  };
  render() {
    const { tasks, typeTaskManager, currentTask } = this.state;
    return (
      <div id="main">
        <h1>
          <span title="Новая задача" onClick={this.handleNewTask}>
            +
          </span>{" "}
          | Задачи
        </h1>
        {tasks.length > 0 ? (
          <Tasks tasks={tasks} onClick={this.handleOpenTask} />
        ) : (
          <div>Задач нет</div>
        )}
        {currentTask && (
          <TaskManager
            type={typeTaskManager}
            onClose={this.handleCloseTaskManager}
            task={currentTask}
            onAddTask={this.handleAddTask}
            onEdit={this.handleEditTask}
            onDelete={this.handleDeleteTask}
          />
        )}
      </div>
    );
  }
  updateTypeTaskManager = type => {
    this.setState({
      typeTaskManager: type
    });
  };
  getIdForNewTask = () => {
    return this.state.tasks.length > 0
      ? this.state.tasks[this.state.tasks.length - 1].id + 1
      : 0;
  };
  getCurrentTask = id => {
    return this.state.tasks[this.state.tasks.findIndex(task => task.id === id)];
  };
  toZeroCurrentTask = () => {
    this.setState({
      currentTask: null
    });
  };
  handleNewTask = () => {
    this.updateTypeTaskManager(TYPE_TASK_MANAGER.newTask);
    this.setState({
      currentTask: {
        id: 0,
        name: "",
        info: "",
        done: false
      }
    });
  };
  handleAddTask = newTask => {
    newTask.id = this.getIdForNewTask();
    this.setState(prevState => ({
      tasks: [...prevState.tasks, newTask]
    }));
    this.toZeroCurrentTask();
  };
  handleEditTask = currentTask => {
    this.setState(prevState => ({
      tasks: prevState.tasks.map(task => {
        return currentTask.id === task.id ? currentTask : task;
      })
    }));
    this.toZeroCurrentTask();
  };
  handleDeleteTask = idDelTask => {
    this.setState(prevState => ({
      tasks: prevState.tasks.filter(task => {
        return task.id !== idDelTask;
      })
    }));
    this.toZeroCurrentTask();
  };
  handleOpenTask = id => {
    this.setState({
      currentTask: this.getCurrentTask(id)
    });
    this.updateTypeTaskManager(TYPE_TASK_MANAGER.editTask);
  };
  handleCloseTaskManager = () => {
    this.toZeroCurrentTask();
  };
}

export default App;
