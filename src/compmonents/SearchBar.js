import React from "react";

function SearchBar({ onSearchDrama }) {

  return (
    <div className="search">
      <input 
        type="text" 
        className="searchTerm" 
        onChange={(e) => onSearchDrama(e.target.value)} 
      />
    </div>
  );
}

export default SearchBar;