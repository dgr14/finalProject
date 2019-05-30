import React, { Component } from "react"

class Question extends Component {
    constructor(props){
    super(props)
        this.state = {
            editToggle: false,
            fullName: this.props.fullName,
            username: this.props.username,
            // what do i reference for the question itself?
        }
    }

    render(){
        const { fullName, username, _id, handleSubmit } =this.props
            return(
                <div>
                    <h1>{fullName}</h1>
                    <h5>Username: {username}</h5>
                    <h5>Question:</h5>
            <p>Response: {/* I need to figure out how to reference the response data here */}</p>
                </div>
            )
    }
}
