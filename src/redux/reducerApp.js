const AppState = {
    headerTitle: 'Fullstack Web Developer Portfolio',
    headerInf: 'Just some of the projects I worked on.'
}

const SET_HEADER_TITLE = 'SET_HEADER_TITLE'
const SET_HEADER_INF = 'SET_HEADER_INF'

const AppReducer = (state = AppState, action) => {
    switch(action.type) {
        case SET_HEADER_TITLE:
            return {
                ...state,
                headerTitle: action.title
            }
        case SET_HEADER_INF:
            return {
                ...state,
                headerInf: action.inf
            }    
        default:
            return state
    }
}

// Action Creators!

export const setHeaderTitle = (title) => ({ type: SET_HEADER_TITLE, title })
export const setHeaderInf = (inf) => ({ type: SET_HEADER_INF, inf })

export default AppReducer