import React, {useContext, useReducer} from "react"
import {reducerCharacters} from "../reducers/Characters";
import {useUpdateData} from "../hooks/updateData";
import {CHARACTERS_INIT} from "../config/Characters";

const CharactersContext = React.createContext()

export const useCharacters = () => {
    return useContext(CharactersContext)
}

export const CharactersProvider = ({ children }) => {
    const [characters, charactersR] = useReducer(reducerCharacters, CHARACTERS_INIT)

    useUpdateData(characters, charactersR)

    return (
        <CharactersContext.Provider value={{ characters, charactersR }}>
            { children }
        </CharactersContext.Provider>
    )
}