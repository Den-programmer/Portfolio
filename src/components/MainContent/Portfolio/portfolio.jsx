import React from 'react'
import classes from './portfolio.module.scss'
import Project from './Project/project'

const Portfolio = ({ projects, navigation, setCurrentProjectId, setHeaderTitle, setHeaderInf }) => {
    const navItems = navigation.map(item => {
        return <li 
            style={item.isActive ? { background: 'linear-gradient(135deg, #00d4ff, #06dba8)', color: '#000', fontWeight: 'bold' } : {}} 
            key={item.id} 
            className={classes.navItem}
        >
            {item.name}
        </li>
    })
    const Projects = projects.map(project => {
        return <Project 
            setHeaderTitle={setHeaderTitle} 
            setHeaderInf={setHeaderInf} 
            setCurrentProjectId={setCurrentProjectId} 
            key={project.id} 
            id={project.id} 
            title={project.title} 
            text={project.text} 
            images={project.images}
            technologies={project.technologies || []}
            category={project.category || ''}
        />
    })
    return (
        <div className={classes.portfolio}>
            <nav className={classes.nav}>
                <ul className={classes.navList}>
                    {navItems}
                </ul>
            </nav>
            <div className={classes.portfolioMainContent}>
                {Projects}
            </div>
        </div>
    )
}

export default Portfolio