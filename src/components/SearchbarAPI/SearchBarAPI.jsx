import React, { useEffect } from 'react';
import { useState } from 'react';
import './SearchBarAPI.css';
import CharacterResults from '../CharacterResults/CharacterResults';
import { CharacterSelectSearchbar } from '../../Context';

const SearchBar = (props) => {
  console.clear();
  // a debouncer should be changed out for a proper react hook
  const [input, setInput] = useState('');
  const [characters, setCharacters] = useState('');
  const [server, setServer] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
        getCharacterID(input, server);
    }, 500);
    return () => clearTimeout(timer);
  }, [input]);

  const handelNameChange = (e) => {
    setInput(e.target.value);
  };

  const handelServerChange = (e) => {
    setServer(e.target.value);
  };

  function getCharacterID(name, server) {
    let serverSearch = '';
    if (server !== '' && server !== undefined) {
      serverSearch = '&server=' + server;
    }
    fetch('https://xivapi.com/character/search?name=' + name + serverSearch)
      .then((Response) => Response.json())
      .then(function (data) {
        setCharacters(data.Results);
      });
  }

  return (
    <CharacterSelectSearchbar.Provider value={{input, setInput}}>
      <div className="character-select">
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Character name..."
            value={input}
            onChange={handelNameChange}
          />
          <select onChange={handelServerChange}>
            <option className='defualt-server-value' value="">Server</option>
            <option value="alpha">Alpha</option>
            <option value="lich">Lich</option>
            <option value="odin">Odin</option>
            <option value="phoenix">Phoenix</option>
            <option value="raiden">Raiden</option>
            <option value="Shiva">Shiva</option>
            <option value="twintania">Twintania</option>
            <option value="zodiark">Zodiark</option>
          </select>
        </div>
        <div>
            <CharacterResults characters={characters} />
        </div>
      </div>
    </CharacterSelectSearchbar.Provider>
  );
};

export default SearchBar;
