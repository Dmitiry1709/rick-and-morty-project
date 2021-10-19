import React from "react"
import {CharactersProvider} from "./contexts/Characters"
import './styles/styles.css'
import Main from "./components/Main";

function App() {
    return (
        <CharactersProvider>
            <Main/>
        </CharactersProvider>
    );
}

export default App;
