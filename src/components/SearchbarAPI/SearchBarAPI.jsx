import React, { useEffect } from 'react';
import { useState } from 'react';
import './SearchBarAPI.css';
import CharacterResults from '../CharacterResults/CharacterResults';
import { CharacterSelectSearchbar } from '../../Context';
import ServerOptions from '../ServerOptions/ServerOptions';

const SearchBar = (props) => {
  // a debouncer should be changed out for a proper react hook
  const [input, setInput] = useState('');
  const [characters, setCharacters] = useState('');
  const [server, setServer] = useState('');
  const [dataCenter, setDataCenter] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      if (input) {
        getCharacterID(input, server);
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [input]);

  const handelNameChange = (e) => {
    setInput(e.target.value);
  };

  const handelDataCenterChange = (e) => {
    setDataCenter(e.target.value);
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
    <CharacterSelectSearchbar.Provider value={{ input, setInput }}>
      <div className="character-select">
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Character name..."
            value={input}
            onChange={handelNameChange}
          />
          <select id="dataCenters" onChange={handelDataCenterChange}>
            <option value={''} className="defualt-server-value">
              Data Center
            </option>
            <option value="Aether">Aether</option>
            <option value="Chaos">Chaos</option>
            <option value="Crystal">Crystal</option>
            <option value="Dynamis">Dynamis</option>
            <option value="Elemental">Elemental</option>
            <option value="Gaia">Gaia</option>
            <option value="Korea">Korea</option>
            <option value="Light">Light</option>
            <option value="Mana">Mana</option>
            <option value="Materia">Materia</option>
            <option value="Meteor">Meteor</option>
            <option value="Primal">Primal</option>
            <option value="猫小胖">猫小胖</option>
            <option value="莫古力">莫古力</option>
            <option value="豆豆柴">豆豆柴</option>
            <option value="陆行鸟">陆行鸟</option>
          </select>
          <ServerOptions dataCenter={dataCenter} setServer={setServer} />
        </div>
        <div>
          <CharacterResults characters={characters} />
        </div>
      </div>
    </CharacterSelectSearchbar.Provider>
  );
};

export default SearchBar;
