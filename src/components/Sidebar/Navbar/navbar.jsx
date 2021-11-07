import React from 'react'
import classes from './navbar.module.scss'
import NavbarItem from './NavbarItem/navbarItem'

const Navbar = ({ navigationLinks, setNavLinkChosenStatus }) => {
    const navLinks = navigationLinks.map(item => {
        return <NavbarItem key={item.id} id={item.id} path={item.path} title={item.title} subLink={item.subLink} isChosen={item.isChosen} setNavLinkChosenStatus={setNavLinkChosenStatus}/>
    })
    return (
        <nav className={classes.nav}>
            <ul className={classes.list}>
                {navLinks}
            </ul>
        </nav>
    )
}

export default Navbar