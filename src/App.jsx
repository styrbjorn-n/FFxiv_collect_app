import './App.css';
import Display from './components/Display/Display';
import { useState, useContext } from 'react';
import { SearchContext, UserGuide } from './Context';
import CharacterSelectButton from './components/CharacterSelectMenu/CharacterSelectMenu';
import { CharacterSelectMenuContext } from './Context';

function App() {
  const [searchResult, setSearchResult] = useState('');
  const [isActive, setActive] = useState(false);
  const [selected, setSelected] = useState(false);
  return (
    <div className="App">
      <UserGuide.Provider value={{selected, setSelected}}>
        <CharacterSelectMenuContext.Provider value={{ isActive, setActive }}>
          <SearchContext.Provider value={{ searchResult, setSearchResult }}>
            <CharacterSelectButton />
            <div className={selected ? 'user-guide-card active' : 'user-guide-card'}>
              <h1>hej</h1>
            </div>
            <Display />
          </SearchContext.Provider>
        </CharacterSelectMenuContext.Provider>
      </UserGuide.Provider>
    </div>
  );
}

export default App;
