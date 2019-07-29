import React, { Component } from "react"
import "./style.css"

class Btn extends Component{
    render(){
        const { val, meth } = this.props

        return <input className="btn" type="button" value={val} onClick={meth} />
    }
}

export default Btn