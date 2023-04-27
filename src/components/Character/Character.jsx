import React, { useContext } from 'react';

import './style.css';
import { CharacterSelectMenuContext } from '../../Context';

function Character(props) {
  const { setActive } = useContext(CharacterSelectMenuContext);

  return (
    <div
      className="character-item"
      onClick={(e) => {
        props.onClick((e.target.value = props.id));
        setActive(false);
      }}
    >
      <img src={props.avatar} />
      <div className="text-container">
        <h3>{props.name}</h3>
        <p>Lodestone ID: {props.id}</p>
      </div>
    </div>
  );
}

export default Character;
