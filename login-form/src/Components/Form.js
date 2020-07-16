import React, { Component } from 'react'
import './design.css'

export class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            password: "",
            gender: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    firsthandler = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    lasthandler = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    passwordhandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    genderhandler = (event) => {
        this.setState({
            gender: event.target.value
        })
    }
    handleSubmit = (event) => {
        alert(`${this.state.firstName} ${this.state.lastName} has register successfully`)
        console.log(this.state);
        this.setState({
            firstName: "",
            lastName: "",
            password: "",
            gender: "",
        })
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="design">
                    <h1>User Registration</h1>
                    <label>First Name : </label>
                    <input type="text" value={this.state.firstName} onChange={this.firsthandler} placeholder="enter first name"/><br/>
                    <label>Last Name : </label>
                    <input type="text" value={this.state.lastName} onChange={this.lasthandler} placeholder="enter last name"/><br/>
                    <label>Password : </label>
                    <input type="password" value={this.state.password} onChange={this.passwordhandler} placeholder="enter password"/><br/>
                    <label>Gender : </label>
                    <select onChange={this.genderhandler} defaultValue="select gender">
                        <option defaultValue>select gender</option>
                        <option value="male">male</option>
                        <option value="female">female</option>
                    </select><br/><br/>
                    <input type="submit" value="submit"/>
                </form>
            </div>
        )
    }
}

export default Form
