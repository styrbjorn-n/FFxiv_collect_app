import React from "react";
import "./style.css";
import Character from "../Character/Character";
import { useContext } from "react";
import { SearchContext } from "../../Context";
function CharacterResults(props) {
  const { setSearchResult } = useContext(SearchContext);
  console.log(setSearchResult);
  if (props.characters !== "" && props.characters !== undefined) {
    let dataItems = props.characters.slice(0, 5).map((character, i) => (
      <li key={i}>
        <Character
          onClick={setSearchResult}
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
