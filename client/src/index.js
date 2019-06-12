import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom"
import App from './App';
import { AppContextProvider } from './AppContext';
import './style.css'
import QuestionProvider from './context/QuestionProvider'

//  Need to import Router component

ReactDOM.render(
        <BrowserRouter>
                <AppContextProvider>
                        <QuestionProvider>
                                <App />
                        </QuestionProvider>
                </AppContextProvider>
        </BrowserRouter>,
        document.getElementById('root')
);
