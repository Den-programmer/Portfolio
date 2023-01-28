import javascript from '../images/technologies/JavaScript-logo.png'
import react from '../images/technologies/react-logo.png'
import typescript from '../images/technologies/typescript-logo.png'
import nodejs from '../images/technologies/nodejs.png'
import webpack from '../images/technologies/webpack.png'
import _jest from '../images/technologies/jest.png'
import html from '../images/technologies/html5.png'
import css from '../images/technologies/css3.png'
import bootstrap from '../images/technologies/bootstrap.png'
import material_ui from '../images/technologies/material-ui.svg'
import jquery from '../images/technologies/jQuery.png'
import sass from '../images/technologies/sass.png'
import git from '../images/technologies/git.png'
import npm from '../images/technologies/npm.png'
import photoshop from '../images/technologies/photoshop.png'
import c from '../images/technologies/c.svg'

const AboutUsState = {
    technologies: [
        {
            id: 1,
            title: "JavaScript",
            img: javascript 
        },
        {
            id: 2,
            title: "React",
            img: react 
        },
        {
            id: 3,
            title: "TypeScript",
            img: typescript 
        },
        {
            id: 4,
            title: "NodeJS",
            img: nodejs
        },
        {
            id: 5,
            title: "Webpack",
            img: webpack
        },
        {
            id: 6,
            title: "Jest",
            img: _jest 
        },
        {
            id: 7, 
            title: "C#",
            img: c
        },
        {
            id: 8,
            title: "HTML5",
            img: html
        },
        {
            id: 9,
            title: "CSS3",
            img: css
        },
        {
            id: 10,
            title: "Bootstrap",
            img: bootstrap 
        },
        {
            id: 11,
            title: "Material UI",
            img: material_ui
        },
        {
            id: 12,
            title: "JQuery",
            img: jquery 
        },
        {
            id: 13,
            title: "Sass",
            img: sass
        },
        {
            id: 14,
            title: "Git",
            img: git
        },
        {
            id: 15,
            title: "Npm",
            img: npm
        },
        {
            id: 16,
            title: "PhotoShop",
            img: photoshop 
        }
    ]
}

const AboutUsReducer = (state = AboutUsState, action) => {
    switch(action.type) {
       default:
           return state
    }
}

// Action Creators!




export default AboutUsReducer