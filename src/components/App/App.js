import React, { Component } from "react";
import TaskManager from "../Form/TaskManager";
import Tasks from "./../Tasks/Tasks";

class App extends Component {
  state = {
    windowTaskOpen: [1, false],
    tasks: [],
    currentTask: -1
  };
  render() {
    return (
      <div id="main">
        <h1>
          <span title="Новая задача" onClick={() => this.openWindowTask(-1, 1)}>
            +
          </span>{" "}
          | Задачи
        </h1>
        {this.state.tasks.length > 0 ? (
          <Tasks
            tasks={this.state.tasks}
            openWindowTask={this.openWindowTask}
          />
        ) : (
          <div>Задач нет</div>
        )}
        {this.state.windowTaskOpen[1] ? (
          <TaskManager
            type={this.state.windowTaskOpen[0]}
            closeWindowTask={this.openWindowTask}
            setNewTasks={this.setNewTasks}
            task={this.state.tasks[this.state.currentTask]}
            editTask={this.editTask}
            handleDelTask={this.handleDelTask}
          />
        ) : null}
      </div>
    );
  }
  openWindowTask = (id, type) => {
    this.setState({
      windowTaskOpen: [type, !this.state.windowTaskOpen[1]],
      currentTask: id
    });
  };
  setNewTasks = newTask => {
    this.setState({
      tasks: [...this.state.tasks, newTask]
    });
  };
  editTask = task => {
    this.setState({
      tasks: this.state.tasks.map((row, index) => {
        if (this.state.currentTask === index) row = task;
        return row;
      })
    });
  };
  handleDelTask = () => {
    const { currentTask, tasks } = this.state;
    this.setState({
      tasks: tasks.filter((task, id) => {
        return id !== currentTask;
      })
    });
  };
}

export default App;
