import React, { Component } from 'react'
import axios from 'axios'
const { Consumer, Provider } = React.createContext();
const questionAxios = axios.create();

questionAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`
    return config;
})

class QuestionProvider extends Component {
    constructor(){
        super()
        this.state = {
            questions: []
        }
    }

    getQuestions = () => {
        questionAxios.get("/api/questions")
            .then(res => {
                this.setState({ questions: res.data })
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    createQuestion = newQuestion => {
        console.log(newQuestion)
        questionAxios.post("/api/questions", newQuestion)
            .then(res => {
                this.setState({ questions: [res.data, ...this.state.questions] })
                this.getQuestions()
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    removeOldQuestion = _id => {
        questionAxios.put("/api/questions/", {living: false})
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
            {this.props.children}
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