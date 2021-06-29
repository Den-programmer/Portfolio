import React from 'react'
import classes from './footer.module.scss'
import LinkBtn from '../common/LinkBtn/linkBtn'

const Footer = () => {
    return (
        <div className={classes.footer}>
            <div className={classes.footerInfContainer}>
                <div className={classes.textWrapper}>
                    <h1>Let's get in touch</h1>
                    <p>
                        Do you have an interesting project I can help with?
                        Feel free to reach out to me!
                    </p>
                </div>
                <div className={classes.navigationPanel}>
                    <LinkBtn isFirst={true}>
                        Get in touch
                    </LinkBtn>
                    <LinkBtn>
                        About me
                    </LinkBtn>
                </div>
            </div>
        </div>
    )
}

export default Footer