import React from 'react'
import Styles from './View.module.css'
import { withContext } from './AppContext'
import Footer from './Footer.js'
import Header from './Header.js'
import AddQuestionForm from './components/questions/AddQuestionForm'

// I need to add function to my view so that I can refresh the page everytime it loads. Otherwise none of the users questions display upon loading the page

function View(props) {
    return (
        <div className={Styles.viewReturnDiv}>
            <Header />
            <div className={Styles.viewSpace}>
                <div className={Styles.questionEntry}>
                    <h3 className={Styles.questionEntryHeader}>Question Entry:</h3>
                    <AddQuestionForm />
                </div>
            </div>   
            <Footer />
        </div>
    )
}

export default withContext(View)
