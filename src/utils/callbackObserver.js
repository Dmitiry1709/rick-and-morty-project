import {OBSERVER, OBSERVER_START} from "../consts/reducerTypes"

export const callbackObserver = (dispatch, info) => {
    return () => {
        dispatch({type: OBSERVER_START})
        if (!info || !info.next) return null

        fetch(info.next)
            .then(response => response.json())
            .then(response => {
                dispatch({type: OBSERVER_START})
                dispatch({
                    type: OBSERVER,
                    data: response
                })
            })
    }
}