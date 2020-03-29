import {HIDE_ALERT, HIDE_LOADER, SHOW_ALERT, SHOW_LOADER} from "./types";

const initialState = {
    loading: false,
    alert: {
        status: 'hide',
        message: '',
        type: 'danger'
    }
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_LOADER:
            return {...state, loading: true}
        case HIDE_LOADER:
            return {...state, loading: false}
        case SHOW_ALERT:
            return {
                ...state, alert: {
                    status: 'show',
                    message: action.payload.message,
                    type: action.payload.type
                }
            }
        case HIDE_ALERT:
            return {
                ...state, alert: {
                    status: 'hide',
                    message: '',
                    type: 'danger'
                }
            }

        default:
            return state
    }
}