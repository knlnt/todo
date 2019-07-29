import React, { Component } from "react";
import Btn from "../Btn/Btn";
import "./TaskManager.css";
const INITIAL_STATE = {
  name: "",
  info: "",
  done: false
};

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = props.type === 1 ? INITIAL_STATE : props.task;
  }
  render() {
    const { name, info, done } = this.state;

    return (
      <div className="window">
        {this.props.type === 1 && <h2>Новая задача</h2>}
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
          {this.props.type === 2 && (
            <p>
              Состояние:
              <label
                className={"done " + (done && "doneEnd")}
                onClick={this.handleUpdateState}
              >
                {done ? "Завершена" : "В процессе"}
              </label>
            </p>
          )}
          <Btn
            value={this.props.type === 1 ? "Добавить" : "Сохранить"}
            onClick={this.handleSubmitForm}
          />
          {this.props.type === 2 && (
            <Btn value="Удалить" onClick={this.handleDelTask} />
          )}
          <Btn value="Отмена" onClick={this.props.closeWindowTask} />
        </form>
      </div>
    );
  }
  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };
  handleSubmitForm = () => {
    this.props.type === 1
      ? this.props.setNewTasks(this.state)
      : this.props.editTask(this.state);
    this.setState(INITIAL_STATE);
    this.props.closeWindowTask(-1, 1);
  };
  handleDelTask = () => {
    this.props.handleDelTask();
    this.setState(INITIAL_STATE);
    this.props.closeWindowTask(-1, 1);
  };
  handleUpdateState = () => {
    this.setState({
      done: !this.state.done
    });
  };
}

export default Form;
