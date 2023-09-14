import React, { useEffect, useState } from "react";
import { useDebounce } from "./hooks/useDebounce";
import "./Searchbar.css"; // Import your CSS file

const Searchbar = () => {
  const [search, setSearch] = useState("");
  const debounceSearch = useDebounce(search, 3000);

  useEffect(() => {
    if (debounceSearch) {
      console.log(`Fetching results for ${debounceSearch}`);
    }
  }, [debounceSearch]);

  return (
    <div className="search-container"> 
      <input
        type="text"
        name="search"
        id=""
        value={search}
        placeholder="Search You want"
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
      <div className="search-results"> 
        {debounceSearch}
      </div>
    </div>
  );
};

export default Searchbar;
