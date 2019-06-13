import React from 'react'
import { withQuestions } from '../../context/QuestionProvider';
import Question from './Question';
import Styles from './QuestionExpanded.module.css'
// import Response from '../responses/Response'

const QuestionExpanded = props => {
    const { question, responses } = props.questions.find(question => question._id === props.match.params._id)

    return (
        <div>
            <h4 className={Styles.questionHeaderText}>Question:</h4>
            <div className={Styles.questionDiv}>
                <h2 className={Styles.questionText}>{question}</h2>
                {/* Need to figure out how to add responses */}
            </div>
            <div className={Styles.responseDiv}>
                {/* Should I use my Response component below? */}
                <p>{responses}</p>
                {/* <Response /> */}
            </div>
        </div>
    )
}

export default withQuestions(QuestionExpanded)
