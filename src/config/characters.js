import {CHARACTERS_INPUTS, CHARACTERS_SELECT} from "../consts/filter"
import {BASE_INIT} from "./base"
import {CHARACTER_PROPS} from "../consts/modalProps"

export const CHARACTERS_INIT = {
    ...BASE_INIT,
    requestUrl: 'https://rickandmortyapi.com/api/character/',
    filterFields: {
        inputs: CHARACTERS_INPUTS,
        selects: CHARACTERS_SELECT
    },
    modalProps: CHARACTER_PROPS
}