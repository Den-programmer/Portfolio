import React from 'react'
import classes from './footer.module.scss'
import s from '../common/LinkBtn/linkBtn.module.scss'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <div className={classes.footer}>
            <div className={classes.footerInfContainer}>
                <div className={classes.textWrapper}>
                    <h2>Let's get in touch</h2>
                    <p>
                        Do you have an interesting project I can help with?
                        Feel free to reach out to me!
                    </p>
                </div>
                <div className={classes.navigationPanel}>
                    <NavLink to='/Contact'
                        style={ { marginRight: '17px' } }
                        className={s.navPanel__btn}>
                        <span style={{ zIndex: '100' }}>Get in touch</span>
                    </NavLink>
                    <NavLink to='/About'
                        className={s.navPanel__btn}>
                        <span style={{ zIndex: '100' }}>About me</span>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Footer