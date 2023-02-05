import React from 'react'
import classes from './contact.module.scss'
import s from '../../common/LinkBtn/linkBtn.module.scss'
import { NavLink } from 'react-router-dom'

const Contact = (props) => {
    return (
        <div className={classes.contactContainer}>
            <h2 className={classes.inf__title}>Contact</h2>
            <div className={classes.contact}>
                <div className={classes.inf}>
                    <h4 className={classes.inf__subtitle}>Where to find me</h4>
                    <p className={classes.listHead}>
                        Do you have an interesting project I can help with?
                        Feel free to reach out to me by using one of the following:
                    </p>
                    <ul className={classes.list}>
                        <li className={classes.listItem}>Email: <span className={classes.listItemMarked}>denisgrigorov094@gmail.com</span></li>
                        <li className={classes.listItem}>LinkedIn: <span className={classes.listItemMarked}>DenIsReltih</span></li>
                        <li className={classes.listItem}>Github: <span className={classes.listItemMarked}>Den-programmer</span></li>
                    </ul>
                    <p className={classes.listFoot}>
                        You can also use the contact form on this page.
                    </p>
                </div>
                <div className={classes.contactForm}>
                    <h4>Contact Form</h4>
                    <div className={classes.textfieldBlock}>
                        <p className={classes.textfield_title}>Full Name</p>
                        <input className={classes.textfield} placeholder="Enter your full name..." type="text" />
                    </div>
                    <div className={classes.textfieldBlock}>
                        <p className={classes.textfield_title}>Email</p>
                        <input className={classes.textfield} placeholder="Enter your email..." type="text" />
                    </div>
                    <div className={classes.textareaBlock}>
                        <p className={classes.textfield_title}>Message</p>
                        <textarea className={classes.textarea} placeholder="Enter your message..." type="text" />
                    </div>
                    <NavLink to='/Home'
                        className={s.navPanel__btn}>
                        <span style={{ zIndex: '100' }}>Send message</span>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Contact