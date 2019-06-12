import React from 'react'
import {Link} from 'react-router-dom'
// How should I create the JSON to continue to update with the new questions that are to be added?
// import list from './questions.json';

const QuestionList = () => {
    const questionsMapped = list.map(question => <Link key={questionsMapped._id} to={`questions/${question._id}`}>{question.name}</Link>)
    return (
        <div>
            <div className='question-list'>
                <h1>Questions</h1>
                <div className='product-links'>
                    {questionsMapped}
                </div>
            </div>

            <Switch>
                <Route path="/products/:_id" component={Question} />
            </Switch>
        </div>
    )
}

export default QuestionList
