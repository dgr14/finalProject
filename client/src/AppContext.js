import React, { Component } from 'react';
import axios from "axios";
const questionAxios = axios.create();

questionAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`
    return config;
})

const AppContext = React.createContext();

export class AppContextProvider extends Component {
    constructor() {
        super()
        this.state = {
            user: JSON.parse(localStorage.getItem("user")) || {},
            token: localStorage.getItem("token") || ""
        }
    }

    // getQuestions = () => {
    //     return questionAxios.get("/api/questions")
    //     .then(response => {
    //         this.setState(prevState => {
    //             return { questions: [...prevState.questions, response.data] }
    //         })
    //         return response;
    //     })
    // }

    // addQuestion = (newQuestion) => {
    //     return questionAxios.post("/api/questions/", newQuestion)
    //         .then(response => {
    //             this.setState(prevState => {
    //                 return { question: [...prevState.questions, response.data] }
    //             });
    //             return response;
    //         })
    // }

    // editQuestions = (questionsId, question) => {
    //     return questionAxios.put(`/api/questions/${questionsId}`, question)
    //         .then(response => {
    //             this.setState(prevState => {
    //                 const updatedQuestions = prevState.questions.map(question => {
    //                     return question._id === response.data._id ? response.data : question
    //                 })
    //                 return { questions: updatedQuestions}
    //             })
    //         })
    // }

    deleteQuestions = (questionId) => {
        return questionAxios.delete(`/api/questions/${questionId}`)
            .then(response => {
                this.setState(prevState => {
                    const updatedQuestions = prevState.questions.filter(question => {
                        return question._id !== questionId
                    })
                    return { questions: updatedQuestions }
                })
                return response;
            })
    }

    signup = (userInfo) => {
        return axios.post("/auth/signup", userInfo)
            .then(response => {
                const { user, token } = response.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                this.setState({
                    user,
                    token
                })
                return response
            })
    }

    login = (credentials) => {
        return axios.post("/auth/login", credentials)
            .then(response => {
                const { token, user } = response.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                this.setState({
                    user,
                    token
                });
                this.getExpenses();
                return response;
            })
    }

    logout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token")
        this.setState({
            user: {},
            token: ""
        })
    }

    render() {
        return(
            <AppContext.Provider
                value={{
                    signup: this.signup,
                    login: this.login,
                    logout: this.logout,
                    ...this.state
                }}
            >

            {this.props.children}

            </AppContext.Provider>
        )
    }
}

export const withContext = Component => {
    return props => {
        return(
            <AppContext.Consumer>
                {
                    globalState => {
                        return(
                            <Component
                                {...globalState}
                                {...props}
                            />
                        )
                    }
                }
            </AppContext.Consumer>
        )
    }
}