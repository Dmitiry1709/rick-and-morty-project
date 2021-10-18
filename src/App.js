import React from "react";
import {CharactersProvider} from "./contexts/Characters";
import CharactersList from "./components/CharactersList";
import Filter from "./components/Filter";

function App() {
      return (
          <CharactersProvider>
              <Filter />
              <CharactersList />
          </CharactersProvider>
      );
}

export default App;
