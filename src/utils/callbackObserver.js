import {DYNAMIC_PAGINATION} from "../consts/reducerTypes"
import {fetchApi} from "./fetchApi";

export const callbackObserver = (dispatch, info) => {
    return () => {
        if (!info || !info.next) return null
        const callback = (res) => {
            dispatch({
                type: DYNAMIC_PAGINATION,
                data: res
            })
        }
        fetchApi(info.next, callback)
    }
}