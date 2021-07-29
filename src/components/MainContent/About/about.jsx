import React from 'react'
import classes from './about.module.scss'
import MainDeveloperInf from './MainDeveloperInf/maindeveloperInfContainer'
import Technologies from './Technologies/technologiesContainer'

const About = () => {
    return (
        <div className={classes.about}>
            <MainDeveloperInf />
            <Technologies />
        </div>
    )
}

export default About