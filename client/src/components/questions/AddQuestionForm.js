import React, { Component } from 'react'
import Form from '../../shared/Form'
import { format } from 'util';
import QuestionForm from './QuestionForm'
import { withContext } from '../../AppContext';
class AddQuestionForm extends Component {
    constructor(props){
        super(props)
            this.state = {
                asked: []
            }
    }
    
    // Make a create question function to make new functions in this component

    // const { title, content, type, user } = props
    render(){
        return(
            <div>
                {/* figure out a way to include user info above the input question */}

                <Form
                    submit={inputs => this.createQuestion(inputs) }
                    inputs={{question: ""}}
                    render={
                        formProps => <QuestionForm {
                            ...formProps
                        } {...this.state} />
                    } />
                
                <div>
                    {/* Map out all questions, but the outermost element of each question must be a <Link to={`/question/${question._id}`}></Link */}
                </div>
            </div>
        )
    }
    
}

export default withContext(AddQuestionForm)
