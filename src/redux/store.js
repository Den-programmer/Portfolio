import { createStore, combineReducers } from "redux"
import AboutUsReducer from "./reducerAboutUs"
import AppReducer from "./reducerApp"
import reducerPortfolio from "./reducerPortfolio"
import reducerSidebar from "./reducerSidebar"

const rootReducer = combineReducers({
    app: AppReducer,
    sidebar: reducerSidebar,
    aboutUs: AboutUsReducer,
    portfolio: reducerPortfolio
})

let store = createStore(rootReducer)

export default store