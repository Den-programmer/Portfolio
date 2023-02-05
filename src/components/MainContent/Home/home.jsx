import React from 'react'
import classes from './home.module.scss'
import s from '../../common/LinkBtn/linkBtn.module.scss'
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <div className={classes.home}>
            <div className={classes.container}>
                <div className={classes.main}>
                    <span className={classes.greetings}>Hey there,</span>
                    <h1 className={classes.inf}>
                        my name is Denis Grigorov. <br />
                        I am Full Stack Web Developer based in
                        Svendborg, Denmark
                    </h1>
                    <div className={classes.about}>
                        <p>
                            Specialized in <span style={{ fontWeight: 'bold' }}>frontend development</span> with over 3 years of professional experience in
                            building the web and working with technologies like React
                        </p>
                    </div>
                    <div className={classes.navigationPanel}>
                        <NavLink to='/Contact'
                        style={ { marginRight: '17px' } }
                            className={s.navPanel__btn}>
                            <span style={{ zIndex: '100' }}>Get in touch</span>
                        </NavLink>
                        <NavLink to='/Portfolio'
                            className={s.navPanel__btn}>
                            <span style={{ zIndex: '100' }}>My Portfolio</span>
                        </NavLink>
                    </div>
                </div>
                <div className={classes.animation}>

                </div>
            </div>
        </div>
    )
}

export default Home