import React from 'react'
import classes from './home.module.scss'
import LinkBtn from '../../common/LinkBtn/linkBtn'

const Home = () => {

    return (
        <div className={classes.home}>
            <div className={classes.container}>
                <div className={classes.main}>
                    <span className={classes.greetings}>Hey there,</span>
                    <h1 className={classes.inf}>
                        my name is Denis Grigorov. <br />
                        I am Full Stack Web Developer based in
                        Svenborg, Denmark
                    </h1>
                    <div className={classes.about}>
                        <p>
                            Specialized in <span style={{ fontWeight: 'bold' }}>frontend development</span> with over 3 years of professional experience in
                            building the web and working with technologies like React
                        </p>
                    </div>
                    <div className={classes.navigationPanel}>
                        <LinkBtn isFirst={true}>
                            Get in touch
                        </LinkBtn>
                        <LinkBtn>
                            My Portfolio
                        </LinkBtn>
                    </div>
                </div>
                <div className={classes.animation}>

                </div>
            </div>
        </div>
    )
}

export default Home