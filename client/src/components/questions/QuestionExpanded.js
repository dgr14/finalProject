import React, { Component } from 'react'
import { withQuestions } from '../../context/QuestionProvider';
import Question from './Question';
import Styles from './QuestionExpanded.module.css'
import Response from '.././responses/Response'
// import Response from '../responses/Response'

class QuestionExpanded extends Component {
    constructor(){
        super()
        this.state = {
            response: "",
            question: "",
            responses: [],
            _id: "",
            upVote: Number,
            downVote: Number
        }
    }

    componentDidMount() {
        this.props.getQuestions()
        // console.log(this.props)
        const { question, responses, _id } = this.props.questions.find(question => question._id === this.props.match.params._id)
        this.setState({question, responses, _id})
        
    }
    componentDidUpdate(prevprops) {
        const { responses, _id } = this.props.questions.find(question => question._id === this.props.match.params._id)
        if (responses.length !== this.state.responses.length){
            this.setState({responses, _id})
        }
    }
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value}) 
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addResponse({response: this.state.response}, this.state._id)
    }

    render(){
        return (
            <div>
                <div className={Styles.questionDiv}>
                <h4 className={Styles.questionHeaderText}>Question:</h4>
                    <h2 className={Styles.questionText}>{this.state.question}</h2>
                    {/* Need to figure out how to add responses */}
                </div>
                    <h3 className={Styles.responseH3Text}>Enter a Response:</h3>
                <div className={Styles.wholeResponseDiv}>
                    <form className={Styles.form} onSubmit={this.handleSubmit}>
                        <textarea
                        className={Styles.responseTextArea}
                        placeholder="Tell us what you think"
                        name={'response'}
                        onChange={this.handleChange}
                        value={this.state.response}/>
                        <button className={Styles.replyButton}>Reply</button>
                    </form>
                    <div className={Styles.responseDiv}>
                    {/* Unordered List not working */}
                        <ul className={Styles.responseHeaderText}>Responses:
                           
                            {this.state.responses.map(response => <Response response={response} questionID={this.state._id} /> )}
                            {/* Need to figure out how to use $inc to incriment */}
                            {/* Also need to build my response component to handle upVoting */}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default withQuestions(QuestionExpanded)
