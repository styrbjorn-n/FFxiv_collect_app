import React, { useContext } from 'react';
import './style.css';
import {
  CharacterSelectMenuContext,
  CharacterSelectSearchbar,
  UserGuide,
} from '../../Context';

function Character(props) {
  const { setActive } = useContext(CharacterSelectMenuContext);
  const { setInput } = useContext(CharacterSelectSearchbar);
  const { setSelected } = useContext(UserGuide);
  let count = 0;

  return (
    <div
      className="character-item"
      onClick={(e) => {
        props.onClick((e.target.value = props.id));
        setActive(false);
        setInput('');
        if (count < 1) {
          setSelected(true);
          count++;
        }
      }}
    >
      <img src={props.avatar} />
      <div className="text-container">
        <h3>{props.name}</h3>
        <p>{props.server}</p>
      </div>
    </div>
  );
}

export default Character;
