import {LOADER, SET_FILTER, UPDATE_DATA} from "../consts/CharactersReducerTypes"

export const reducerCharacters = (state, action) => {
    switch (action.type) {
        case SET_FILTER:
            let filter = { ...state.filter }
            filter[action.filterName] = action.filterValue
            return {...state, filter}
        case LOADER:
            return {...state, loader: true}
        case UPDATE_DATA:
            return {...state, data: action.data, loader: false}
        default:
            return state
    }
}