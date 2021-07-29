import javascript from '../images/technologies/JavaScript-logo.png'
import react from '../images/technologies/react-logo.png'
import typescript from '../images/technologies/typescript-logo.png'

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