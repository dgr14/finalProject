import React, { Component } from 'react'
import { withContext } from "../AppContext"
import Styles from './Signup.module.css'


class Signup extends Component {
    constructor() {
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
        this.props.signup({username: this.state.username, password: this.state.password})
        .then(() => this.props.history.push("/questions"))
        .catch(err => {
            // What is supposed to go here
            // this.setState({errorMessage: err.response.data.message}) ?

        })
    }

    render(){
        return(
            <div>
                <form className={Styles.signupForm} onSubmit={this.handleSubmit}>
                    <h3>Sign Up</h3>
                    <input 
                        onChange={this.handleChange}
                        value={this.state.username}
                        name="username"
                        type="text"
                        placeholder="Username"/>
                    <input 
                        onChange = {this.handleChange}
                        value={this.state.password}
                        name="password"
                        type="password"
                        placeholder="Password"/>
                    <button type="submit">Create Account</button>
                </form>

                {/* {
                    this.state.console.errorMessage &&
                    <p>{this.state.errorMessage}</p>
                    
                } */}

            </div>
        )
    }

}

export default withContext(Signup);