import React from "react"
import { Link }  from 'react-router-dom'
import Styles from './Question.module.css'
import { withQuestions } from '../../context/QuestionProvider'

const Question = props => {
    console.log(props)
    return(
        <Link to={`/questions/${props._id}`} className={Styles.questionLinks}>
            {/* <button className={Styles.questionVote} onClick={() => props.upVoter(props._id)}>Vote</button> */}
            <p>{props.question}</p>
            <span>{props.vote}</span>
        </Link>
    )
}

export default withQuestions(Question)