import React, { Component } from "react"
import "./style.css"

class Tasks extends Component{
    render(){
        return(
            <ul>
                <Task
                    tasks={this.props.tasks}
                    openWindowTask={this.props.openWindowTask}
                />
            </ul>
        )
    }
}

const Task = (props) => {
    const rows = props.tasks.map((row, index) => {
        return(
            <li
                key={index}
                onClick={() => props.openWindowTask(index, 2)}
                className={row.stat && "endTask"}>
                    {row.name}
            </li>
        )
    })
    return rows
}

export default Tasks