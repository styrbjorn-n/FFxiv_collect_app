import React from 'react';
import { useState } from 'react';

import './style.css';
import SearchBar from '../SearchbarAPI/SearchBarAPI';

const CharacterSelectButton = () => {
  const [slider, setSlider] = useState(false);

  const toggleSlider = () => {
    setSlider(!slider);
    console.log(slider);
  };
  return (
    <>
      <button className="openSlider" onClick={toggleSlider}>
        Select Character
      </button>
      <div className={slider && 'slider'}>
               <button className="closeSlider" onClick={toggleSlider}>
          Close
        </button>
        <SearchBar></SearchBar>
      </div>
    </>
  );
};

export default CharacterSelectButton;
