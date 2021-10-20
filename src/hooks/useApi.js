import {LOADER, UPDATE_DATA} from "../consts/reducerTypes"
import {useEffect} from "react"
import {generateRequestUrl} from "../utils/generateRequestUrl"

export const useApi = (state, dispatch) => {
    useEffect(() => {
        dispatch({type: LOADER})
        fetch(generateRequestUrl(state.requestUrl ,state.page, state.filter))
            .then(response => response.json())
            .then(response => dispatch({
                type: UPDATE_DATA,
                data: response
            }))
    }, [state.filter])
}