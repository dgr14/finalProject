import React from "react";
import Signup from "./Signup";
import Login from "./Login";
import { withContext } from "../AppContext"
import Styles from './Auth.module.css'

// how do I use protected route?

function Auth() {
    return (
        <div>
            <h1 className={Styles.authHeader}>Advice-App</h1>
                <Login />
                <Signup />
        </div>
    )
}

export default withContext(Auth)

// not allowing me to resolve 