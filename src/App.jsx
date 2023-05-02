import './App.css';
import Display from './components/Display/Display';
import { useState, useContext } from 'react';
import { SearchContext } from './Context';
import CharacterSelectButton from './components/CharacterSelectMenu/CharacterSelectMenu';
import { CharacterSelectMenuContext } from './Context';

function App() {
  const [searchResult, setSearchResult] = useState(29013370);
  const [isActive, setActive] = useState(true);
  return (
    <div className="App">
      <CharacterSelectMenuContext.Provider value={{ isActive, setActive }}>
        <SearchContext.Provider value={{ searchResult, setSearchResult }}>
          <CharacterSelectButton />
          <Display />
        </SearchContext.Provider>
      </CharacterSelectMenuContext.Provider>
    </div>
  );
}

export default App;
