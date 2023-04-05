import "./App.css";
import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import SearchItem from "./components/SearchItem";
import DropDown from "./components/DropDown";
import useDebounce from "./Hooks/useDebounce";

function App() {
  const [searchResult, setSearchResult] = useState("");
  const [serverSearchResult, setServerSearchResult] = useState("");
  const [data, setData] = useState([]);
  const searchQuery = useDebounce(searchResult, 300);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://xivapi.com/character/search?name=${searchQuery}${
          serverSearchResult ? `&server=${serverSearchResult}` : ""
        }`
      )
        .then((res) => res.json())
        .then((data) => setData(data));
    };
    fetchData();
  }, [searchQuery, serverSearchResult]);

  return (
    <React.Fragment>
      <SearchBar
        onChangeName={setSearchResult}
        omChangeServer={setServerSearchResult}
      />
      <DropDown>
        {data?.Results?.map((item) => (
          <SearchItem
            image={item.Avatar}
            name={item.Name}
            server={item.Server}
            id={item.ID}
          />
        ))}
      </DropDown>
      <p>
        {data?.Results?.map((item) => {
          return item.name;
        })}
      </p>
    </React.Fragment>
  );
}

export default App;
