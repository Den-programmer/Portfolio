import React, { useState } from 'react'
import classes from './sidebar.module.scss'
import Navbar from './Navbar/navbar'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Sidebar = ({ sidebarWidth, isSidebarOpen, setSidebarIsOpenStatus, navigationLinks, setNavLinkChosenStatus }) => {
    const [hovered, setHoveredStatus] = useState(false)
    return (
        <>
            <div style={{ width: sidebarWidth + 'px' }} className={classes.sidebarContainer}>
                <div className={classes.sidebar}>
                    <div className={classes.initial}>
                        D
                    </div>
                    <div className={classes.sidebarSectionContainer}>
                        <div className={classes.sidebarSection}>
                            <div className={classes.ButtonMenu}>
                                <div onClick={() => setSidebarIsOpenStatus(!isSidebarOpen)} onMouseEnter={() => setHoveredStatus(true)} onMouseLeave={() => setHoveredStatus(false)} className={classes.hamburger}>
                                    <div style={hovered && isSidebarOpen === false ? { margin: '8px 0' } : { margin: '5px 0' }} className={isSidebarOpen ? classes.barFirstActive : classes.bar}></div>
                                    <div style={hovered && isSidebarOpen === false ? { margin: '8px 0' } : { margin: '5px 0' }} className={isSidebarOpen ? classes.barSecondActive : classes.bar}></div>
                                    {!isSidebarOpen && <div style={hovered ? { width: '30px', margin: '8px 0' } : { width: '24px', margin: '5px 0' }} className={classes.bar}></div>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.socials}>
                        {/* <FontAwesomeIcon icon={["fab", "github"]} /> */}
                    </div>
                </div>
            </div>
            {isSidebarOpen && <Navbar setNavLinkChosenStatus={setNavLinkChosenStatus} navigationLinks={navigationLinks} />}
        </>
    )
}

export default Sidebar