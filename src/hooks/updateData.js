import {LOADER, UPDATE_DATA} from "../consts/CharactersReducerTypes";
import {useEffect} from "react";
import {generateQueryCharacters} from "../functions/generateQueryCharacters";

export const useUpdateData = (state, dispatch) => {
    useEffect(() => {
        dispatch({type: LOADER})
        fetch(generateQueryCharacters(state.page, state.filter))
            .then(response => response.json())
            .then(response => dispatch({
                type: UPDATE_DATA,
                data: response
            }))
    }, [state.filter])
}