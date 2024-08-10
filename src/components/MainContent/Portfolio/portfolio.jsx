import React from 'react'
import classes from './portfolio.module.scss'
import Project from './Project/project'

const Portfolio = ({ projects, navigation, setCurrentProjectId, setHeaderTitle, setHeaderInf }) => {
    const navItems = navigation.map(item => {
        return <li style={item.isActive ? { background: 'yellow', color: '#392727', fontWeight: 'bold' } : { background: '#222', color: '#FFF', fontWeight: 'bold' }} key={item.id} className={classes.navItem}>{item.name}</li>
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