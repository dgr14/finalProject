import React, { Component } from "react";
import { withContext } from "../AppContext";
import Styles from "./Login.module.css"

class LoginForm extends Component {
    constructor(){
        super();
        this.state = {
            username: "",
            password: "",
            errorMessage: ""
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    clearInputs = () => {
        this.setState({
            username: "",
            password: "",
            errorMessage: ""
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state)
            .then(() => this.props.history.push("/expenses/entry"))
            .catch(err => {
                // is this where I put the error message?
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h3>Log In</h3>
                    <div>
                        <input 
                            onChange ={this.handleChange}
                            value={this.state.username}
                            name="username"
                            type="text"
                            placeholder="username"/>
                        <input 
                            onChange={this.handleChange}
                            value={this.state.password}
                            name="password"
                            type="password"
                            placeholder="password" />
                    </div>
                    <button type="submit">Submit</button>
                </form>
                {
                    this.state.errorMessage &&
                    <p style={{color: "red"}}>{this.state.errorMessage}</p>
                }

            </div>
        )
    }
}

export default withContext(LoginForm)