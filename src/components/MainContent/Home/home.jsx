import React from 'react'
import classes from './home.module.scss'

const Home = () => {

    return (
        <div className={classes.home}>
            <div className={classes.container}>
                <div className={classes.main}>
                    <span className={classes.greetings}>Hey there,</span>
                    <h1 className={classes.inf}>
                        my name is Denis Grygorov. <br />
                        I am Full Stack Web Developer based in
                        Stockholm, Sweden
                    </h1>
                    <div className={classes.about}>
                        <p>
                            Specialized in <span style={{ fontWeight: 'bold' }}>frontend development</span> with over 4 years of professional experience in
                            building the web and working with technologies like
                        </p>
                    </div>
                    <div className={classes.navigationPanel}>
                        <button className={classes.navPanel__btn}>
                            <span style={{ zIndex: '100' }}>My Portfolio</span>
                            <span className={classes.hoverBackground}></span>
                        </button>
                        <button className={classes.navPanel__btn}>
                            <span style={{ zIndex: '100' }}>Get in touch</span>
                            <span></span>
                        </button>
                    </div>
                </div>
                <div className={classes.animation}>

                </div>
            </div>
        </div>
    )
}

export default Home