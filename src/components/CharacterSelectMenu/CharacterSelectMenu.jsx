import React from 'react';
import { useState } from 'react';
import './style.css';
import SearchBar from '../SearchbarAPI/SearchBarAPI';
import { CharacterSelectMenuContext } from '../../Context';

const CharacterSelectButton = () => {
  const [isActive, setActive] = useState(true);

  const toggleSlider = () => {
    setActive(!isActive);
  };
  return (
    <>
      <CharacterSelectMenuContext.Provider value={{ isActive, setActive }}>
        <button className="openSlider" onClick={toggleSlider}>
          Select Character
        </button>
        <div className={isActive ? 'active slider' : 'slider'}>
          <button className="closeSlider" onClick={toggleSlider}>
            &#9747;
          </button>
          <SearchBar></SearchBar>
        </div>
      </CharacterSelectMenuContext.Provider>
    </>
  );
};

export default CharacterSelectButton;
