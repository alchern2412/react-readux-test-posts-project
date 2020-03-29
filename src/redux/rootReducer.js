import {postsReducer} from "./postsReducer";
import {combineReducers} from "redux";
import {appReducer} from "./appReducer";


export const rootReducer = combineReducers({
    posts: postsReducer,
    app: appReducer
})