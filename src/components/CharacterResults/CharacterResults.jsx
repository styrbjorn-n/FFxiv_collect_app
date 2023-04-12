import React from "react";
import Character from "../Character/Character";
import "./style.css";

function CharacterResults(props) {
  if (props.characters !== "" && props.characters !== undefined) {
    let dataItems = props.characters.slice(0, 5).map((character, i) => (
      <li key={i}>
        <Character
          onClick={props.setSearchResultHook}
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
