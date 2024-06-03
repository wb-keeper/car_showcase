"use client";

import { FC, useState } from "react";
import { SearchManufacturer } from "@/components/index";

const handleSearch = () => {
  return;
};
interface SearchBarProps {}

const SearchBar: FC<SearchBarProps> = () => {
  const [manufacturer, setManufacturer] = useState("");
  const handleSearch = () => {};
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton />
      </div>
    </form>
  );
};

export default SearchBar;
