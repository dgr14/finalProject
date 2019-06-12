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

    componentDidMount(){
        // find the question in the array of questions within context that matches this id
        // this.props.match.params._id
    }

    render(){
        const { fullName, username, _id, handleSubmit } =this.props
            return(
                <div>
                    <h1>{fullName}</h1>
                    <h5>Username: {username}</h5>
                    <p>Question:</p>
            <p>Response: {/* I need to figure out how to reference the response data here */}</p>
                </div>
            )
    }
}

export default Question