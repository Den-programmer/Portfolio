import React from 'react'
import classes from './project.module.scss'
import { NavLink } from 'react-router-dom'

const Project = ({ id, images, title, text, setCurrentProjectId, setHeaderTitle, setHeaderInf, technologies = [], category = '' }) => {
    const onProjectClick = () => {
        setCurrentProjectId(id)
        setHeaderTitle(title)
        setHeaderInf(text)
    }

    const getCategoryClass = (category) => {
        const categoryMap = {
            'social-network': 'socialNetwork',
            'todo-list': 'todoList',
            'e-commerce': 'internetStore'
        }
        return categoryMap[category] || ''
    }

    return (
        <NavLink to={`/Portfolio/project/` + id} onClick={onProjectClick} className={`${classes.project} ${classes[getCategoryClass(category)]}`}>
            <img className={classes.projectImage} src={images[0]} alt={title} />
            <div className={classes.projectContent}>
                <h4 className={classes.title}>{title}</h4>
                <p className={classes.text}>{text}</p>
                {technologies && technologies.length > 0 && (
                    <div className={classes.technologies}>
                        {technologies.map((tech, index) => (
                            <span key={index} className={classes.tech}>{tech}</span>
                        ))}
                    </div>
                )}
                <div className={classes.viewBtn}>View Project</div>
            </div>
        </NavLink>
    )
}

export default Project