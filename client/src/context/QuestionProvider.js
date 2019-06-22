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

    upVoting = () => {
        // this.setState({ UpVoting: this.state.UpVoting ++ })
    }

    downVoting = () => {
        // this.setState({ DownVoting: this.state.DownVoting -- })
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

    addResponse = (newResponse, _id) => {
        questionAxios.put(`/api/questions/response/${_id}`, newResponse)
            .then(response => {
                this.setState(prevState => ({
                    questions: prevState.questions.map(question => question._id === _id ? response.data : question)
                }))
            })
    }
    upVoter = (_id) => {
        questionAxios.put(`/api/questions/upvote/${_id}`)
            .then(response => {
                this.setState(prevState => ({
                    questions: prevState.questions.map(question => question._id === _id ? response.data : question)
                }))
            })
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
                createQuestion: this.createQuestion,
                addResponse: this.addResponse,
                upVoter: this.upVoter
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