import React, { Component } from "react";
import "./App.css";
import TaskManager from "../Form/TaskManager";
import Tasks from "./../Tasks/Tasks";
import { TYPE_TASK_MANAGER } from "./../../consts";

class App extends Component {
  state = {
    typeTaskManager: TYPE_TASK_MANAGER.newTask,
    isOpenTaskManager: false,
    tasks: [],
    currentTask: null
  };
  render() {
    return (
      <div id="main">
        <h1>
          <span title="Новая задача" onClick={this.handleNewTaskClick}>
            +
          </span>{" "}
          | Задачи
        </h1>
        {this.state.tasks.length > 0 ? (
          <Tasks tasks={this.state.tasks} handleClickTask={this.openTask} />
        ) : (
          <div>Задач нет</div>
        )}
        {this.state.isOpenTaskManager ? (
          <TaskManager
            typeTaskManager={this.state.typeTaskManager}
            closeTaskManager={this.toggleTaskManager}
            addNewTask={this.addNewTask}
            task={this.state.currentTask}
            editTask={this.editTask}
            delTask={this.delTask}
          />
        ) : null}
      </div>
    );
  }
  toggleTaskManager = () => {
    this.setState(prevState => ({
      isOpenTaskManager: !prevState.isOpenTaskManager
    }));
  };
  updateTypeTaskManager = type => {
    this.setState({
      typeTaskManager: type
    });
  };
  addNewTask = newTask => {
    newTask.id = this.addNewIdForTask();
    this.setState(prevState => ({
      tasks: [...prevState.tasks, newTask]
    }));
  };
  editTask = currentTask => {
    this.setState(prevState => ({
      tasks: prevState.tasks.map(task => {
        return currentTask.id === task.id ? currentTask : task;
      })
    }));
  };
  delTask = idDelTask => {
    this.setState(prevState => ({
      tasks: prevState.tasks.filter(task => {
        return task.id !== idDelTask;
      })
    }));
  };
  openTask = id => {
    this.setState({
      currentTask: this.returnCurrentTask(id)
    });
    this.updateTypeTaskManager(TYPE_TASK_MANAGER.editTask);
    this.toggleTaskManager();
  };
  addNewIdForTask = id => {
    if (id === undefined) id = 0;
    if (this.state.tasks.length > 0) {
      id++;
      this.state.tasks.map(task => {
        if (task.id === id) id = this.addNewIdForTask(id);
        return true;
      });
    }
    return id;
  };
  returnCurrentTask = id => {
    return this.state.tasks[this.state.tasks.findIndex(task => task.id === id)];
  };
  handleNewTaskClick = () => {
    this.updateTypeTaskManager(TYPE_TASK_MANAGER.newTask);
    this.toggleTaskManager();
  };
}

export default App;
