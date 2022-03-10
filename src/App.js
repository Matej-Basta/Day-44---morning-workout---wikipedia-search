import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import SearchBar from "./components/SearchBar";
import SearchResult from "./components/SearchResult";

function App() {

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className="App">
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} setSearchResults={setSearchResults}/>
      <SearchResult searchResults={searchResults}/>
    </div>
  );
}

export default App;
