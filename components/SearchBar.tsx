"use client";

import { FC } from "react";
import { SearchManufacturer } from "@/components/index";

const handleSearch = () => {
  return;
};
interface SearchBarProps {}

const SearchBar: FC<SearchBarProps> = () => {
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer />
      </div>
    </form>
  );
};

export default SearchBar;
