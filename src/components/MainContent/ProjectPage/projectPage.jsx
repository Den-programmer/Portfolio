import React from 'react'
import classes from './projectPage.module.scss'
import { useState } from 'react'

const ProjectPage = (props) => {
    const project = props.projects[props.currentProjectId - 1]
    const technologies = project.technologies.map(name => {
        return <div key={name} className={classes.technology}>{name}</div>
    })
    const slides = project.images.map(image => {
        return <img key={image} className={classes.project_image} src={image} alt="" />
    })
    const [projectImageIndex, setProjectImageIndex] = useState(0)

    const dots = project.images.map((image, index) => {
        return <div key={index} onClick={() => setProjectImageIndex(index)} className={projectImageIndex === index ? classes.activeDot : classes.dot}></div>
    })
    const prev = () => {
        setProjectImageIndex(projectImageIndex <= 0 ? project.images.length - 1 : projectImageIndex - 1)
    }
    const next = () => {
        setProjectImageIndex(projectImageIndex >= project.images.length - 1 ? 0 : projectImageIndex + 1)
    }
    return (
        <div className={classes.projectPage}>
            <div className={classes.mainContent}>
                <div className={classes.project}>
                    <div className={classes.projectDisplay}>
                        <button onClick={prev} className={classes.project_btn_prev}>&lt;</button>
                        {slides[projectImageIndex]}
                        <button onClick={next} className={classes.project_btn_next}>&gt;</button>
                    </div>
                    <div className={classes.dots}>
                        {dots}
                    </div>
                </div>
                <div className={classes.sidebar}>
                    <div className={classes.technologies}>
                        <h4 className={classes.sidebar_title}>Technologies</h4>
                        <div className={classes.technologies_content}>
                            {technologies}
                        </div>
                    </div>
                    <div className={classes.date}>
                        <h4 className={classes.sidebar_title}>Date</h4>
                        <p>{project.date}</p>
                    </div>
                    <div className={classes.online}>
                        <h4 className={classes.sidebar_title}>Online</h4>
                        <a  href={project.online}>{project.online}</a>
                    </div>
                </div>
            </div>
            <div className={classes.specification}>
                <h4 className={classes.inf_title}>Technical specification</h4>
                <p>{project.specification}</p>
            </div>
        </div>
    )
}

export default ProjectPage