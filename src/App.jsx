import "./App.css";
import CharacterResults from "./components/CharacterResults/CharacterResults";
import SearchBarAPI from "./components/SearchbarAPI/SearchBarAPI";
import { useState } from "react";

function App() {
  const [searchResult, setSearchResult] = useState("100");
  return (
    <div className="App">
      <SearchBarAPI
        searchResultHook={searchResult}
        setSearchResultHook={setSearchResult}
      />
      <p>{searchResult}</p>
    </div>
  );
}

export default App;
