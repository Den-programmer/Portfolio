import React from 'react'
import classes from './project.module.scss'
import { NavLink } from 'react-router-dom'

const Project = ({ id, images, title, text, setCurrentProjectId, setHeaderTitle, setHeaderInf }) => {
    const onProjectClick = () => {
        setCurrentProjectId(id)
        setHeaderTitle(title)
        setHeaderInf(text)
    }
    return (
        <NavLink to={`/Portfolio/project/` + id} onClick={onProjectClick} className={classes.project}>
            <img className={classes.projectImage} src={images[0]} alt="" />
            <div className={classes.projectContent}>
                <h4 className={classes.title}>{title}</h4>
                <p className={classes.text}>{text}</p>
            </div>
        </NavLink>
    )
}

export default Project