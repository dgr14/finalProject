import React, { Component } from 'react'
import { withQuestions } from '../../context/QuestionProvider'
import Styles from './Response.module.css'

class Response extends Component {
    constructor(props) {
        super(props);
        this.state = {
            upVote:0,
            downVote:0,
            show: true

        };
    }
    
    ToggleClick = () => {
        this.setState({ show: !this.setState.show })
    }
  
    render(){
        // console.log(this.props)
        return(
            <div className={Styles.listItem}>
                {this.props.response}
                {/* tie the button to the props.upVote and props.downVote
                        look at $ methods */}
                    {/* Do I have to feed  */}
                <div className={Styles.buttonContainer}>
                    <button className={Styles.upVoteButton} onClick={() => this.props.upVoter(this.props.questionID)}> Up Vote </button>
                    <button className={Styles.downVoteButton} onClick={() => this.downVoter}> Down Vote </button>
                </div>
            </div>
        )  
    }
}


export default withQuestions(Response)