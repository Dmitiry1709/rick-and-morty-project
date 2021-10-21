import {LOADER, UPDATE_DATA} from "../consts/reducerTypes"
import {useEffect} from "react"
import {generateRequestUrl} from "../utils/generateRequestUrl"
import {fetchApi} from "../utils/fetchApi";

export const useFilter = (state, dispatch) => {
    useEffect(() => {
        dispatch({type: LOADER})
        const callback = (res) => {
            dispatch({
                type: UPDATE_DATA,
                data: res
            })
        }
        fetchApi(generateRequestUrl(state.requestUrl ,state.page, state.filter), callback)
    }, [state.filter])
}