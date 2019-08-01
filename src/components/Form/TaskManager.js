import React, { Component } from "react";
import PropTypes from "prop-types";
import Btn from "../Btn/Btn";
import { TYPE_TASK_MANAGER } from "./../../consts";
import "./TaskManager.css";
const INITIAL_STATE = {
  id: 0,
  name: "",
  info: "",
  done: false
};

class TaskManager extends Component {
  constructor(props) {
    super(props);
    this.state =
      props.type === TYPE_TASK_MANAGER.newTask ? INITIAL_STATE : props.task;
  }
  render() {
    const { name, info, done } = this.state;
    const { type } = this.props;

    return (
      <div className="window">
        {type === TYPE_TASK_MANAGER.newTask && <h2>Новая задача</h2>}
        <form>
          <input
            type="text"
            name="name"
            placeholder="Название"
            value={name}
            onChange={this.handleInputChange}
            required
          />
          <textarea
            name="info"
            placeholder="Описание"
            value={info}
            onChange={this.handleInputChange}
            required
          />
          {type === TYPE_TASK_MANAGER.editTask && (
            <p>
              Состояние:
              <label
                className={"done " + (done && "doneEnd")}
                onClick={this.handleDoneClick}
              >
                {done ? "Завершена" : "В процессе"}
              </label>
            </p>
          )}
          <Btn
            value={
              type === TYPE_TASK_MANAGER.newTask ? "Добавить" : "Сохранить"
            }
            onClick={() =>
              this.handleSubmitForm(
                type === TYPE_TASK_MANAGER.newTask ? "add" : "save"
              )
            }
          />
          {type === TYPE_TASK_MANAGER.editTask && (
            <Btn value="Удалить" onClick={() => this.handleSubmitForm("del")} />
          )}
          <Btn value="Отмена" onClick={this.handleCancelClick} />
        </form>
      </div>
    );
  }
  addNewTask = () => {
    this.props.onAddTask(this.state);
  };
  editTask = () => {
    this.props.onEdit(this.state);
  };
  delTask = () => {
    this.props.onDelete(this.state.id);
  };
  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };
  handleSubmitForm = type => {
    switch (type) {
      case "add":
        this.addNewTask();
        break;
      case "save":
        this.editTask();
        break;
      case "del":
        this.delTask();
        break;
    }
    this.props.onClose();
    this.setState(INITIAL_STATE);
  };
  handleDoneClick = () => {
    this.setState(prevState => ({
      done: !prevState.done
    }));
  };
  handleCancelClick = () => {
    this.props.onClose();
    this.setState(INITIAL_STATE);
  };
}

TaskManager.propTypes = {
  type: PropTypes.number,
  task: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    info: PropTypes.string,
    done: PropTypes.bool
  }),
  onClose: PropTypes.func,
  onAddTask: PropTypes.func,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func
};

export default TaskManager;
