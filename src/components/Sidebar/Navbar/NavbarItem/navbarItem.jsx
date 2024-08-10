import React, { useState } from 'react'
import classes from './navbarItem.module.scss'
import { NavLink } from 'react-router-dom'

const NavbarItem = ({ id, path, subLink, title, isChosen, setNavLinkChosenStatus }) => {
    const [hovered, setStatusHovered] = useState(false)
    return (
        <NavLink onClick={() => setNavLinkChosenStatus(id)} style={{ textDecoration: 'none' }} to={path}>
            <li onMouseEnter={() => setStatusHovered(true)} onMouseLeave={() => setStatusHovered(false)} 
            className={isChosen ? classes.listItemActive : classes.listItem}>
                <a className={hovered ?  classes.hoveredlistLink  : classes.listLink} to={path}>{title}</a>
                <p className={hovered ? classes.subLink : classes.hoveredsubLink}>{subLink}</p>
            </li>
        </NavLink>
    )
}

export default NavbarItem