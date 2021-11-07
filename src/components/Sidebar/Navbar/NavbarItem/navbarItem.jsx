import React, { useState } from 'react'
import classes from './navbarItem.module.scss'
import { NavLink } from 'react-router-dom'

const NavbarItem = ({ id, path, subLink, title, isChosen, setNavLinkChosenStatus }) => {
    const [hovered, setStatusHovered] = useState(false)
    return (
        <NavLink onClick={() => setNavLinkChosenStatus(id)} style={{ textDecoration: 'none' }} to={path}>
            <li onMouseEnter={() => setStatusHovered(true)} onMouseLeave={() => setStatusHovered(false)} 
            className={isChosen ? classes.listItemActive : classes.listItem}>
                <a style={hovered ? { color: '#E2786C' } : {  }} className={classes.listLink} to={path}>{title}</a>
                <p style={hovered ? { color: '#FFF' } : {  }} className={classes.subLink}>{subLink}</p>
            </li>
        </NavLink>
    )
}

export default NavbarItem