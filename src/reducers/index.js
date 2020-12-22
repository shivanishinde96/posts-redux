import { combineReducers } from "redux";
import postReducer from './postReducer'
import userReducer from './userReducer'
import selectedpostReducer from './selectedpostReducer'

export default combineReducers({
    posts:postReducer,
    users:userReducer,
    selectedpost:selectedpostReducer
})