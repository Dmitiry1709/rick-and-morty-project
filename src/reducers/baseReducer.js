import {CLOSE_MODAL, LOADER, OPEN_MODAL, SET_FILTER, UPDATE_DATA} from "../consts/reducerTypes"
import {afterSetFilter} from "../utils/afterSetFilter"

export const baseReducer = (state, action) => {
    switch (action.type) {
        case SET_FILTER:
            return afterSetFilter(state, action)
        case LOADER:
            return {...state, loader: true}
        case UPDATE_DATA:
            return {
                ...state,
                info: action.data.info,
                items: action.data.results,
                loader: false
            }
        case OPEN_MODAL:
            return {...state, modal: action.item}
        case CLOSE_MODAL:
            return {...state, modal: false}
        default:
            return state
    }
}