import React from 'react'
import classes from './about.module.scss'

const About = () => {
    return (
        <div className={classes.about}>
            <div className={classes.AboutContainer}>
                <div className={classes.realInformation}>
                    <div className={classes.inf}>
                        <h2>About Denis Grygorov</h2>
                        <p>
                            I've been learned a lot of techonologies since my 13 years, 
                            In my fifteen years old started to create My Social Network using React.

                            Really ambitious and powerful person, beside learning programming, interested in every kinds of science.
                            The most active in: learning launguages (English, Czech, German), Math, Politics, History, Geopolitics, ... The culture of
                            European countries. Really like travelling.

                            Nowadays working on projects: My Social Network, Internet Store, My Social Network API. Gradually learn C#, and do some
                            tasks for practise.

                            Trying to do the best social net service to use. Hope it will be so :) 
                        </p>
                    </div>
                    <div className={classes.photo}>
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About