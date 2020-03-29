import {CREATE_POST, FETCH_POSTS, HIDE_ALERT, HIDE_LOADER, SHOW_ALERT, SHOW_LOADER} from "./types";

export function createPost(post) {
    return {
        type: CREATE_POST,
        payload: post
    }
}

export function showLoader() {
    return {
        type: SHOW_LOADER
    }
}
export function hideLoader() {
    return {
        type: HIDE_LOADER
    }
}

export function showAlert(type, message) {
    return {
        type: SHOW_ALERT,
        payload: {type, message}
    }
}

export function hideAlert() {
    return {
        type: HIDE_ALERT
    }
}

export function fetchPosts() {
    return async dispatch => {
        dispatch(showLoader())
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
        const json = await response.json()
        setTimeout(() => {
            dispatch({type: FETCH_POSTS, payload: json})
            dispatch(hideLoader())
        }, 500)

    }
}