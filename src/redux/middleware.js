import {CREATE_POST} from "./types";
import {showAlert} from "./actions";

const forbiddenn = ['fuck', 'spam', 'php']

export function forbiddenWordsMiddleware({dispatch}) {
    return function (next) {
        return function (action) {
            if (action.type === CREATE_POST) {
                const found = forbiddenn.filter(w => action.payload.title.includes(w))
                if (found.length) {
                    return dispatch(showAlert('danger', 'Вы спаммер. Мы вас не звали!)'))
                }
            }
            return next(action)
        }
    }
}