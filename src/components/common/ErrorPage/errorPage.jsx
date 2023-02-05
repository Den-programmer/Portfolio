import React from 'react'
import classes from './errorPage.module.scss'
import s from '../LinkBtn/linkBtn.module.scss'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <div className={classes.errorPage}>
            <h3>Error 404 page not found</h3>
            <p>The page has been deleted or your route isn't right...</p>
            <NavLink to='/Home'
                className={s.navPanel__btn}>
                <span style={{ zIndex: '100' }}>Get to the home page</span>
            </NavLink>
        </div>
    )
}

export default ErrorPage