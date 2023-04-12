import "./App.css";
import Display from "./components/Display/Display";
import SearchBarAPI from "./components/SearchbarAPI/SearchBarAPI";
import { useState } from "react";
import { SearchContext } from "./Context";

function App() {
  const [searchResult, setSearchResult] = useState(29013370);
  return (
    <div className="App">
      <SearchContext.Provider value={{ searchResult, setSearchResult }}>
        <SearchBarAPI />
        <Display />
      </SearchContext.Provider>
    </div>
  );
}

export default App;
