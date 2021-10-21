import {LOADER, UPDATE_DATA} from "../consts/reducerTypes"
import {useEffect} from "react"
import {generateRequestUrl} from "../utils/generateRequestUrl"
import {SERVER_ERROR} from "../consts/messages";

export const useApi = (state, dispatch) => {
    useEffect(() => {
        dispatch({type: LOADER})
        fetch(generateRequestUrl(state.requestUrl ,state.page, state.filter))
            .then(res => res.ok ? res.json() : Promise.reject(res))
            .then(res => dispatch({
                type: UPDATE_DATA,
                data: res
            }))
            .catch(() => console.log(SERVER_ERROR))
    }, [state.filter])
}