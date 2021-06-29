import { createStore, combineReducers } from "redux"
import AppReducer from "./reducerApp"
import reducerSidebar from "./reducerSidebar"

const rootReducer = combineReducers({
    app: AppReducer,
    sidebar: reducerSidebar
})

let store = createStore(rootReducer)

export default store