import { createStore, combineReducers } from "redux"
import AboutUsReducer from "./reducerAboutUs"
import AppReducer from "./reducerApp"
import reducerSidebar from "./reducerSidebar"

const rootReducer = combineReducers({
    app: AppReducer,
    sidebar: reducerSidebar,
    aboutUs: AboutUsReducer
})

let store = createStore(rootReducer)

export default store