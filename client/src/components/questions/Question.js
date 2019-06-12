import React from "react"
import { Link }  from 'react-router-dom'
import Styles from './Question.module.css'


const Question = props => {
    return(
        <Link className={Styles.questionLinks}>
            {props.question}
        </Link>
    )
}


export default Question