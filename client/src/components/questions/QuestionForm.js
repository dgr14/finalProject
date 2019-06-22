import React from 'react'
import Styles from './QuestionForm.module.css'
import { withQuestions } from '../../context/QuestionProvider';

function QuestionForm(props) {
    const { handleChange, createQuestion, inputs, handleSubmit } = props
    return (
            <form className={Styles.questionForm} onSubmit={handleSubmit}>
                <textarea className={Styles.questionTextArea} 
                            placeholder="Ask Away!"
                            name="question"
                            value = {inputs.question}
                            onChange = {handleChange}
                            submit = {createQuestion} 
                />
                <button className={Styles.questionTextButton}>Submit</button>
            </form>
    )
}

export default withQuestions(QuestionForm)
