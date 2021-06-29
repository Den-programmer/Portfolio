import React from 'react'
import classes from './header.module.scss'

const Header = (props) => {
    return (
        <div className={classes.header}>
            <div className={classes.headerInfContainer}>
                <h2>{props.headerTitle}</h2>
                <p>{props.headerInf}</p>
            </div>
        </div>
    )
}

export default Header