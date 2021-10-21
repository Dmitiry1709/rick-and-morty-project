import {OBSERVER, OBSERVER_START} from "../consts/reducerTypes"
import {fetchApi} from "./fetchApi";

export const callbackObserver = (dispatch, info) => {
    return () => {
        dispatch({type: OBSERVER_START})
        if (!info || !info.next) return null
        const callback = (res) => {
            dispatch({type: OBSERVER_START})
            dispatch({
                type: OBSERVER,
                data: res
            })
        }
        fetchApi(info.next, callback)
    }
}