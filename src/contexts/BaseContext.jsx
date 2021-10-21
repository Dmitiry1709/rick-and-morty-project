import React, {useContext, useReducer} from "react"
import {baseReducer} from "../reducers/baseReducer"
import {useFilter} from "../hooks/useFilter"

const BaseContext = React.createContext()

export const useBaseContext = () => {
    return useContext(BaseContext)
}

export const BaseProvider = ({ children, init }) => {
    const [state, dispatch] = useReducer(baseReducer, init)

    useFilter(state, dispatch)

    return (
        <BaseContext.Provider value={{ state, dispatch }}>
            { children }
        </BaseContext.Provider>
    )
}