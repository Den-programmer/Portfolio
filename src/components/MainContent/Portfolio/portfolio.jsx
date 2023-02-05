import React from 'react'
import classes from './portfolio.module.scss'
import Project from './Project/project'

const Portfolio = ({ projects, navigation, setCurrentProjectId, setHeaderTitle, setHeaderInf }) => {
    const navItems = navigation.map(item => {
        return <li style={item.isActive ? { background: '#E2786C' } : { background: '#202E53' }} key={item.id} className={classes.navItem}>{item.name}</li>
    })
    const Projects = projects.map(project => {
        return <Project setHeaderTitle={setHeaderTitle} 
        setHeaderInf={setHeaderInf} 
        setCurrentProjectId={setCurrentProjectId} 
        key={project.id} id={project.id} 
        title={project.title} text={project.text} 
        images={project.images}/>
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