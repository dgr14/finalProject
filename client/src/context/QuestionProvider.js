import React, { Component } from 'react'
import axios from 'axios'
const { Consumer, Provider } = React.createContext();

class QuestionProvider extends Component {
    constructor(){
        super()
        this.state = {
            questions: []
        }
    }

    getQuestions = () => {
        axios.get("/questions")
            .then(res => {
                this.setState({ questions: res.data })
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    createQuestion = newQuestion => {
        axios.post("/questions")
            .then(res => {
                this.setState({ questions: [res.data, ...this.state.questions] })
                this.getQuestions()
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    removeOldQuestion = _id => {
        axios.put("/question/", {living: false})
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    render(){
        return (
            <Provider
            value={{
                ...this.state,
                removeOldQuestion: this.removeOldQuestion,
                getQuestions: this.getQuestions,
                createQuestion: this.createQuestion
            }}>

            </Provider>
        )
    }
}

export const withQuestions = C => props => (
    <Consumer>
        {value => <C {...value} {...props}/>}
    </Consumer>
)

export default QuestionProvider