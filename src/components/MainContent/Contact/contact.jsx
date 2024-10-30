import React from 'react'
import classes from './contact.module.scss'

const Contact = (props) => {
    return (
        <div className={classes.contactContainer}>
            <h2 className={classes.inf__title}>Contact</h2>
            <div className={classes.contact}>
                <div className={classes.inf}>
                    <h4 className={classes.inf__subtitle}>Where to find me</h4>
                    <p className={classes.listHead}>
                        Do you have an interesting project I can help with?
                        Feel free to reach out to me by using one of the following:
                    </p>
                    <ul className={classes.list}>
                        <li className={classes.listItem}>LinkedIn: <span className={classes.listItemMarked}><a className={classes.listItemMarkedLink} target="_blank" href="https://www.linkedin.com/in/denisenligtener2">DenIsEnlightener</a></span></li>
                        <li className={classes.listItem}>Github: <span className={classes.listItemMarked}><a className={classes.listItemMarkedLink} target="_blank" href="https://github.com/Den-programmer">Den-programmer</a></span></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Contact