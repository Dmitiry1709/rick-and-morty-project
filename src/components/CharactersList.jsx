import React from "react"
import {useCharacters} from "../contexts/Characters";


function CharactersList() {
    const characters = useCharacters().characters.data

    if (characters.results) {
        return (
            <>
                {characters.results.map(i => <img key={i.id} src={i.image} alt={i.name}/>)}
            </>
        )
    }

    return (
        <>
        </>
    )
}

export default CharactersList