import React from 'react';

import './style.css';

function Character(props) {
  return (
    <div className="character-item">
      <img src={props.avatar} />
      <div className="text-container">
        <h3>{props.name}</h3>
        <p>Lodestone ID: {props.id}</p>
      </div>
    </div>
  );
}

export default Character;
