import React from 'react'
import Styles from './Footer.module.css'
import { withContext } from './AppContext'

function Footer(props) {
    return (
        <div className={Styles.footerReturnDiv}>
            <div className={Styles.logoutDiv}>
                <button className={Styles.logoutButton} onClick={props.logout}>Logout</button>
            </div>
        </div>
    )
}

export default withContext (Footer)
