import SocialNetwork1 from '../images/projectImage/SocialNetwork/Screenshot_2.png'
import SocialNetwork2 from '../images/projectImage/SocialNetwork/Screenshot_1.png'
import SocialNetwork3 from '../images/projectImage/SocialNetwork/Screenshot_3.png'
import Todolist1 from '../images/projectImage/Todolist/Screenshot_1.png'
import Todolist2 from '../images/projectImage/Todolist/Screenshot_2.png'
import Todolist3 from '../images/projectImage/Todolist/Screenshot_3.png'
import InternetStore1 from '../images/projectImage/InternetStore/Screenshot_1.png'
import InternetStore2 from '../images/projectImage/InternetStore/Screenshot_2.png'
import InternetStore3 from '../images/projectImage/InternetStore/Screenshot_3.png'
import InternetStore4 from '../images/projectImage/InternetStore/Screenshot_4.png'

const SET_CURRENT_PROJECT_ID = 'SET_CURRENT_PROJECT_ID'

const Portfolio = {
    projects: [
        {
            id: 1,
            title: 'Social Network',
            text: 'The app to communicate with people',
            images: [SocialNetwork1, SocialNetwork2, SocialNetwork3],
            date: 'March 2020',
            technologies: ['React', 'Redux', 'TypeScript', 'NodeJS', 'Express', 'MongoDB', 'HTML5', 'CSS3', 'Sass', 'MaterialUI'],
            online: 'https://den-programmer.github.io/SocialNet/',
            specification: 'The Social Network App is used to communicate with people, find new friends, sharing photos and videos, listening to the favourite music and so on.'
        },
        {
            id: 2,
            title: 'TodoList',
            text: 'The app to keep your notes',
            images: [Todolist1, Todolist2, Todolist3],
            date: 'April 2020',
            technologies: ['React', 'Redux', 'JavaScript', 'Firebase', 'HTML5', 'CSS3'],
            online: 'https://den-programmer.github.io/TodoList/',
            specification: 'Cool app for keep your tasks comfortably. Comfortable interface, menu. There\'s  detailed instraction on the page about. The app uses firebase to store data, so that, we have simple app with minimalistic design.'
        },
        {
            id: 3,
            title: 'Internet Store',
            text: 'Buy new things with our internet store',
            images: [InternetStore1, InternetStore4, InternetStore2, InternetStore3],
            date: 'September 2020',
            technologies: ['React', 'Redux', 'React-Slick', 'JavaScript', 'HTML5', 'CSS3', 'Sass'],
            online: 'https://den-programmer.github.io/Internet-store/',
            specification: 'The Internet Store is created to help user buy him the things he need at affordable prices.'
        }
    ],
    currentProjectId: 1,
    navigation: [
        {
            id: 1,
            name: 'All',
            isActive: true
        }
    ]
}

const reducerPortfolio = (state = Portfolio, action) => {
    switch(action.type) {
        case SET_CURRENT_PROJECT_ID:
            return {
                ...state,
                currentProjectId: action.projectId
            }
        default:
            return state
    }
}

// Action Creators!

export const setCurrentProjectId = (projectId) => ({ type: SET_CURRENT_PROJECT_ID, projectId })

export default reducerPortfolio