import React, { useEffect } from "react";
import { useState } from "react";

import "./SearchBarAPI.css";
import CharacterResults from "../CharacterResults/CharacterResults";

const SearchBar = (props) => {
  console.clear();
  // a debouncer should be changed out for a proper react hook
  const [input, setIput] = useState("");
  const [characters, setCharacters] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (input !== "") {
        getCharacterID(input);
      } else {
        setCharacters("");
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [input]);

  const handelchange = (e) => {
    setIput(e.target.value);
  };

  function getCharacterID(name) {
    fetch("https://xivapi.com/character/search?name=" + name)
      .then((Response) => Response.json())
      .then(function (data) {
        setCharacters(data.Results);
      });
  }

  return (
    <div className="character-select">
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Character name..."
          value={input}
          onChange={handelchange}
        />

        <select>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
      </div>
      <div>
        <ul>
          <CharacterResults
            characters={characters}
            searchResultHook={props.searchResultHook}
            setSearchResultHook={props.setSearchResultHook}
          />
        </ul>
      </div>
    </div>
  );
};

export default SearchBar;
