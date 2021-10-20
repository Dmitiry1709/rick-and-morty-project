import React, {useContext, useReducer} from "react"
import {baseReducer} from "../reducers/baseReducer"
import {useApi} from "../hooks/useApi"

const BaseContext = React.createContext()

export const useBaseContext = () => {
    return useContext(BaseContext)
}

export const BaseProvider = ({ children, init }) => {
    const [state, dispatch] = useReducer(baseReducer, init)

    useApi(state, dispatch)

    return (
        <BaseContext.Provider value={{ state, dispatch }}>
            { children }
        </BaseContext.Provider>
    )
}