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
      <UserGuide.Provider value={{ selected, setSelected }}>
        <CharacterSelectMenuContext.Provider value={{ isActive, setActive }}>
          <SearchContext.Provider value={{ searchResult, setSearchResult }}>
            <CharacterSelectButton />
            <div
              className={
                selected ? 'user-guide-card active' : 'user-guide-card'
              }
            >
              <h1>Welcome to the FFxiv mount guide</h1>
              <p>
                To use this tool you need to make sure your loadstone profile is
                set to public, ohter wise we can not retrive data from your
                character.
              </p>
              <p>
                If and when your profile is set to public you simply click on
                the character select button and then search for your character
                using the search field and dropdowns. When your character has
                been found, click on it and you will be able to see what mounts
                you own and the once you dont. To get a bit more info click on
                the mounts icon
              </p>
            </div>
            <Display />
          </SearchContext.Provider>
        </CharacterSelectMenuContext.Provider>
      </UserGuide.Provider>
    </div>
  );
}

export default App;
