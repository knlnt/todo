import React, { Component } from "react"
import Form from "./../Form/Form"
import Tasks from "./../Tasks/Tasks"

class App extends Component{
    constructor(props){
        super(props)

        this.state = {
            windowTaskOpen: [1, false],
            tasks: [],
            idTask: -1
        }
    }
    render(){
        return(
            <div id="main">
                <h1><span title="Новая задача" onClick={() => this.openWindowTask(-1, 1)}>+</span> | Задачи</h1>
                {
                    this.state.tasks.length > 0 ?
                    <Tasks
                        tasks={this.state.tasks}
                        openWindowTask={this.openWindowTask}
                    /> :
                    <div>Задач нет</div>
                }
                {
                    this.state.windowTaskOpen[1] ?
                    <Form
                        type={this.state.windowTaskOpen[0]}
                        openWindowTask={this.openWindowTask}
                        setNewTasks={this.setNewTasks}
                        task={this.state.tasks[this.state.idTask]}
                        editTask={this.editTask}
                        delTask={this.delTask}
                    /> :
                    null
                }
            </div>
        )
    }
    openWindowTask = (id, type) => {
        this.setState({
            windowTaskOpen: [type, !this.state.windowTaskOpen[1]],
            idTask: id
        })
    }
    setNewTasks = (newTask) => {
        this.setState({
            tasks: [...this.state.tasks, newTask]
        })
    }
    editTask = (task) => {
        this.setState({
            tasks: this.state.tasks.map((row,index) => {
                if( this.state.idTask === index ) row = task
                return row
            })
        })
    }
    delTask = () => {
        const { idTask, tasks } = this.state
        this.setState({
            tasks: tasks.filter((task, id) => {
                return id !== idTask
            })
        })
    }
}

export default App