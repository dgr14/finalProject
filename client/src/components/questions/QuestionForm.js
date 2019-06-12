import React from 'react'
import Styles from './QuestionForm.module.css'
import { withQuestions } from '../../context/QuestionProvider';

function QuestionForm(props) {
    const { handleChange, createQuestion, inputs, } = props
    return (
        <div>
            <textarea className={Styles.questionTextArea} name="question"
                        value = {inputs.question}
                        onChange = {handleChange}
                        submit = {createQuestion} 

            />
        </div>
    )
}

export default withQuestions(QuestionForm)
