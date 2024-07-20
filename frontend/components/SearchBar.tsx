import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

interface SearchBarProps {
  onSearch: (keyword: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    onSearch(keyword);
    router.push("/search?q=${keyword}");
  };

  return (
    <div>
      <input
        type="text"
        value={keyword}
        onChange={(event) => setKeyword(event.target.value)}
        placeholder="Search..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
