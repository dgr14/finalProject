import React, { Component } from 'react'
import Form from '../../shared/Form'
import { format } from 'util';
import QuestionForm from './QuestionForm'
import { withContext } from '../../AppContext';
import { withQuestions } from '../../context/QuestionProvider';
import Question from './Question'
import Styles from './AddQuestionForm.module.css'

class AddQuestionForm extends Component {
    constructor(props){
        super(props)
            this.state = {
                asked: []
            }
    }

    componentDidMount() {
        this.props.getQuestions()
        // console.log(this.props)
    }
    
    // Make a create question function to make new functions in this component

    // const { title, content, type, user } = props
    render(){
        console.log(this.props)
        return(
            <div>
                {/* figure out a way to include user info above the input question */}

                <Form
                    submit={inputs => this.props.createQuestion(inputs)}
                    inputs={{question: ""}}
                    render={
                        formProps => <QuestionForm {
                            ...formProps
                        } {...this.state} />
                    } />
                
                <div className={Styles.responseDiv}>
                    <h1>Current Questions:</h1>
                        <div className={Styles.mappedResponses}>
                            {/* When mapped most recent question needs to appear 1st */}
                            {this.props.questions.map(question => <Question {...question} />)}
                            {/* Map out all questions, but the outermost element of each question must be a <Link to={`/question/${question._id}`}></Link */}
                        </div>
                </div>

            </div>
        )
    }
    
}

export default withContext(withQuestions(AddQuestionForm))
