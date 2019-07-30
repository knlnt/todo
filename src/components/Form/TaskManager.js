import React, { Component } from "react";
import Btn from "../Btn/Btn";
import "./TaskManager.css";
const INITIAL_STATE = {
  id: 0,
  name: "",
  info: "",
  done: false
};

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = props.typeTaskManager === 1 ? INITIAL_STATE : props.task;
  }
  render() {
    const { name, info, done } = this.state;
    const { typeTaskManager } = this.props;

    return (
      <div className="window">
        {typeTaskManager === 1 && <h2>Новая задача</h2>}
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
          {typeTaskManager === 2 && (
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
            value={typeTaskManager === 1 ? "Добавить" : "Сохранить"}
            onClick={() =>
              this.handleSubmitForm(typeTaskManager === 1 ? "add" : "save")
            }
          />
          {typeTaskManager === 2 && (
            <Btn value="Удалить" onClick={() => this.handleSubmitForm("del")} />
          )}
          <Btn value="Отмена" onClick={this.handleCancelClick} />
        </form>
      </div>
    );
  }
  addNewTask = () => {
    this.props.addNewTask(this.state);
  };
  editTask = () => {
    this.props.editTask(this.state);
  };
  delTask = () => {
    this.props.delTask(this.state.id);
  };
  closeTaskManager = () => {
    this.setState(INITIAL_STATE);
    this.props.closeTaskManager();
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
    this.closeTaskManager();
  };
  handleDoneClick = () => {
    this.setState(prevState => ({
      done: !prevState.done
    }));
  };
  handleCancelClick = () => {
    this.closeTaskManager();
  };
}

export default Form;
