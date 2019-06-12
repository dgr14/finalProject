import React from 'react'
import Styles from './Header.module.css'

function Header() {
    return (
        <div className={Styles.headerReturnDiv}>
            <h1 className={Styles.headerText}>Advice App</h1>
        </div>
    )
}

export default Header
