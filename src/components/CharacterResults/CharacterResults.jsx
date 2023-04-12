import React from 'react';
import Character from '../Character/Character';
import './style.css';

function CharacterResults(props) {
  if (props.characters != '') {
    let dataItems = props.characters.map((character, i) => <li key={i}><Character name={character.Name} avatar={character.Avatar} id={character.ID} /></li>);
    return <ul className='result-container'>{dataItems}</ul>
  }
}

export default CharacterResults;
