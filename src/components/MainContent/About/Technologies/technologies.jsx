import React from 'react'
import classes from './technologies.module.scss'

const Technologies = ({ technologies }) => {
    const resources = technologies.map(item => {
        return <div key={item.id} className={classes.source}>
            <img className={classes.sourceImage} src={item.img} alt=""/> <p className={classes.sourceTitle}>{item.title}</p>
        </div>
    })
    return (
        <div className={classes.technologiesContainer}>
            <div className={classes.technologies}>
                <h3>Most used technologies</h3>
                <div className={classes.resources}>
                    {resources}
                </div>
            </div>
        </div>
    )
}

export default Technologies