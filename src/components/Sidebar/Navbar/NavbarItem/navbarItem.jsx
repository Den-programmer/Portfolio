import React, { useState } from 'react'
import classes from './navbarItem.module.scss'
import { NavLink } from 'react-router-dom'
import { useBreakpoint } from '../../../../redux/hooks/useBreakpointHook'

const NavbarItem = ({ id, path, subLink, title, isChosen, setNavLinkChosenStatus, setSidebarIsOpenStatus }) => {
    const [hovered, setStatusHovered] = useState(false)

    const isMobile = useBreakpoint(1024)

    const onNavLinkClick = () => {
        setNavLinkChosenStatus(id)
        if(isMobile) {
            setSidebarIsOpenStatus(false)
        }
    }

    return (
        <NavLink onClick={onNavLinkClick} style={{ textDecoration: 'none' }} to={path}>
            <li onMouseEnter={() => setStatusHovered(true)} onMouseLeave={() => setStatusHovered(false)} 
            className={isChosen ? classes.listItemActive : classes.listItem}>
                <a className={hovered ?  classes.hoveredlistLink  : classes.listLink} to={path}>{title}</a>
                <p className={hovered ? classes.subLink : classes.hoveredsubLink}>{subLink}</p>
            </li>
        </NavLink>
    )
}

export default NavbarItem