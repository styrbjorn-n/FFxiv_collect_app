import React from 'react';
import { useState } from 'react';

import './style.css';
import SearchBar from '../SearchbarAPI/SearchBarAPI';

const CharacterSelectButton = () => {
  const [isActive, setActive] = useState(false);

  const toggleSlider = () => {
    setActive(!isActive);
  };
  return (
    <>
      <button className="openSlider" onClick={toggleSlider}>
        Select Character
      </button>
      <div className={isActive ? 'active slider' : 'slider'}>
        <button className="closeSlider" onClick={toggleSlider}>
          close
        </button>
        <SearchBar></SearchBar>
      </div>
    </>
  );
};

export default CharacterSelectButton;
