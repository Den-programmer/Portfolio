import React from 'react'
import classes from './mainContent.module.scss'
import Home from './Home/home'

const MainContent = () => {
    return (
        <div className={classes.mainContent}>
            <Home />
        </div>
    )
}

export default MainContent