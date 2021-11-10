import React from "react";

function Search({doSearch, searched, setSearched}) {
  
  function handleSearch(e) {
    setSearched(e.target.value)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searched}
        onChange={(e) => handleSearch(e)}
      />
    </div>
  );
}

export default Search;
