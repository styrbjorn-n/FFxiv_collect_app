import React from "react";
import Character from "../Character/Character";
import "./style.css";

function CharacterResults(props) {
  if (props.characters !== '' && props.characters !== undefined) {
    let dataItems = props.characters.map((character, i) => (
      <li key={i}>
        <Character
          name={character.Name}
          avatar={character.Avatar}
          id={character.ID}
        />
      </li>
    ));
    return <ul className="result-container">{dataItems}</ul>;
  } else {
    return <ul></ul>;
  }
}

export default CharacterResults;
