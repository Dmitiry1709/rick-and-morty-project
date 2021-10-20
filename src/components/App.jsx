import React from "react"
import {BaseProvider} from "../contexts/BaseContext"
import '../styles/styles.css'
import Main from "./Main"
import {CHARACTERS_INIT} from "../config/characters"

function App() {
    return (
        <BaseProvider init={CHARACTERS_INIT}>
            <Main/>
        </BaseProvider>
    );
}

export default App
