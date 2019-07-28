import React, { Component } from "react"
import Btn from "./../Btn/Btn"
import "./style.css"

class Form extends Component{
    constructor(props){
        super(props)

        this.initialState = {
            name: "",
            info: "",
            state: false
        }
        props.type === 1 ? this.state = this.initialState : this.state = props.task
    }
    render(){
        const { name, info, stat } = this.state

        return(
            <div className="window">
                { this.props.type === 1 && <h2>Новая задача</h2> }
                <form>
                    <input
                        type="text"
                        name="name"
                        placeholder="Название"
                        value={name}
                        onChange={this.inputChange}
                        required
                    />
                    <textarea
                        name="info"
                        placeholder="Описание"
                        value={info}
                        onChange={this.inputChange}
                        required
                    />
                    {
                        this.props.type === 2 &&
                        <p>
                            Состояние:
                            <label
                                className={"stat " + (stat && "statEnd")}
                                onClick={this.updateState}>
                                    {stat ? "Завершена" : "В процессе"}
                            </label>
                        </p>
                    }
                    <Btn val={this.props.type === 1 ? "Добавить" : "Сохранить"} meth={this.submitForm}/>
                    {    
                        this.props.type === 2 ?
                        <Btn val="Удалить" meth={this.delTask} /> :
                        null
                    }
                    <Btn val="Отмена" meth={this.props.openWindowTask} />
                </form>
            </div>
        )
    }
    inputChange = (event) => {
        const { name, value } = event.target

        this.setState({
            [name]: value
        })
    }
    submitForm = () => {
        this.props.type === 1 ? this.props.setNewTasks(this.state) : this.props.editTask(this.state)
        this.setState(this.initialState)
        this.props.openWindowTask(-1, 1)
    }
    delTask = () => {
        this.props.delTask()
        this.setState(this.initialState)
        this.props.openWindowTask(-1, 1)
    }
    updateState = () => {
        this.setState({
            stat: !this.state.stat
        })
    }
}

export default Form