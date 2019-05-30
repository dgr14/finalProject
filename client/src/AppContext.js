import React from 'react';
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
            questions: [],
            user: JSON.parse(localStorage.getItem("user")) || {},
            token: localStorage.getItem("token") || ""
        }
    }

    componentDidMount() {
        this.getQuestions();
    }

    getQuestions = () => {
        return questionAxios.get("/api/questions")
        .then(response => {
            this.setState(prevState => {
                return { questions: [...prevState.questions, response.data] }
            })
            return response;
        })
    }

    editQuestions = (questionsID, question) => {
        return questionAxios.put(`/api/questions/${questionId}`, question)
            .then(response => {
                this.setState(prevState => {
                    const updatedQuestions = prevState.questions.map(question => {
                        return question._id === response.data._id ? response.data : question
                    })
                    return { questions: updatedQuestions}
                })
            })
    }


}