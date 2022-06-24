import React, {useState} from 'react'

function Search({ onNewSearch }) {
    const [newSearch, setNewSearch] = useState("")

    function handleSearch(e) {
        e.preventDefault();
        onNewSearch(newSearch)
    }

  return (
    <form onSubmit={handleSearch}>
      <div>
        <input
          className="search-bar"
          type="text"
          placeholder="Search Coffees..."
          value={newSearch}
          onChange={(e) => setNewSearch(e.target.value)}
        />
        <button className="search-button" type="submit">
          ☕
        </button>
        <button className="clear" onClick={(e) => setNewSearch("")}>
          <strong>Clear</strong>
        </button>
      </div>
    </form>
  );
}

export default Search