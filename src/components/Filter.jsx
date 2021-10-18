import React from "react"
import {CHARACTERS_INPUTS, CHARACTERS_SELECT} from "../consts/CharactersFilter";
import {useCharacters} from "../contexts/Characters";
import {SET_FILTER} from "../consts/CharactersReducerTypes";

function Filter() {
    const selects = []
    const charactersR = useCharacters().charactersR

    for (let key in CHARACTERS_SELECT){
        let select = <select onChange={(event) => charactersR({type:SET_FILTER, filterName: key, filterValue: event.target.value})} name={key}>
            <option value="">Не выбрано</option>
            { CHARACTERS_SELECT[key].map(i => <option value={i}>{i}</option>) }
        </select>

        selects.push(select)
    }

    return (
        <div>
            {CHARACTERS_INPUTS.map(i => <input onBlur={(event) => charactersR({type:SET_FILTER, filterName: i, filterValue: event.target.value})} name={i} type="text" placeholder={i}/>)}
            { selects }
        </div>
    )
}

export default Filter