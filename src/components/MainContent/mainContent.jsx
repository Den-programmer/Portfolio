import React from 'react'
import classes from './mainContent.module.scss'

const MainContent = (props) => {
    return (
        <div className={classes.mainContent}>
            {props.children}
        </div>
    )
}

export default MainContent