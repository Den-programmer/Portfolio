import React from 'react'
import classes from './sidebar.module.scss'

const Sidebar = ({ sidebarWidth }) => {
    return (
        <div style={{ width: sidebarWidth + 'px' }} className={classes.sidebar}>
            
        </div>
    )
}

export default Sidebar