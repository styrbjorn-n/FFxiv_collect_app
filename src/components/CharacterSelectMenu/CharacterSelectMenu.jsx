import React from 'react';
import { useContext } from 'react';
import './style.css';
import SearchBar from '../SearchbarAPI/SearchBarAPI';
import { CharacterSelectMenuContext } from '../../Context';

const CharacterSelectButton = () => {
  const { isActive, setActive } = useContext(CharacterSelectMenuContext);
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
          &#9747;
        </button>
        <SearchBar></SearchBar>
      </div>
    </>
  );
};

export default CharacterSelectButton;
