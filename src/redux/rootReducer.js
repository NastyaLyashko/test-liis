import { combineReducers } from "redux";
import { hotelsReducer } from "./hotelsReduser";
import { loginReducer } from "./loginReducer";
import { likesReducer }from '../redux/likesReduser'

export const rootReducer = combineReducers({
    loginData: loginReducer,
    hotels: hotelsReducer,
    favourites: likesReducer
})