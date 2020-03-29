import {postsReducer} from "./postsReducer";
import {combineReducers} from "redux";


export const rootReducer = combineReducers({
    posts: postsReducer
})