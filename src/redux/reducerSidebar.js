const Sidebar = {
    // sidebarWidth: 340
    sidebarWidth: 80,
    navigationLinks: [
        {
            id: 1,
            title: 'Home',
            path: '/',
            subLink: 'Introduction',
            isChosen: true
        },
        {
            id: 2,
            title: 'About',
            path: '/About',
            subLink: 'Professional skills and experience',
            isChosen: false
        },
        {
            id: 3,
            title: 'Portfolio',
            path: '/Portfolio',
            subLink: 'Some of the projects I worked on',
            isChosen: false
        },
        {
            id: 4,
            title: 'Contact',
            path: '/Contact',
            subLink: 'Get in touch',
            isChosen: false
        }
    ],
    isSidebarOpen: false
}

const SET_SIDEBAR_IS_OPEN_STATUS = 'SET_SIDEBAR_IS_OPEN_STATUS'

const SET_NAVLINK_CHOSEN_STATUS = 'SET_NAVLINK_CHOSEN_STATUS'

const reducerSidebar = (state = Sidebar, action) => {
    switch(action.type) {
        case SET_SIDEBAR_IS_OPEN_STATUS:
            return {
                ...state,
                isSidebarOpen: action.status
            }
        case SET_NAVLINK_CHOSEN_STATUS:
            return { 
                ...state,
                navigationLinks: state.navigationLinks.map(item => {
                    if(item.id === action.itemId) return { ...item, isChosen: true }
                    return { ...item, isChosen: false }
                })
            }    
        default:
            return state
    }
}

export const setSidebarIsOpenStatus = (status) => ({ type: SET_SIDEBAR_IS_OPEN_STATUS, status })

export const setNavLinkChosenStatus = (itemId) => ({ type: SET_NAVLINK_CHOSEN_STATUS, itemId })

export default reducerSidebar