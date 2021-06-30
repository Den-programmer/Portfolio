import React from 'react'
import classes from './errorPage.module.scss'
import LinkBtn from '../LinkBtn/linkBtn'

const ErrorPage = () => {
    return (
        <div className={classes.errorPage}>
            <h3>Error 404 page not found</h3>
            <p>The page has been deleted or your route isn't right...</p>
            <LinkBtn>
                Get to the home page
            </LinkBtn>
        </div>
    )
}

export default ErrorPage