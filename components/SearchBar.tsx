"use client";

import { FC, useState } from "react";
import { SearchManufacturer } from "@/components/index";
import Image from "next/image";

const handleSearch = () => {
  return;
};
interface SearchBarProps {}
const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image src="magnifying-glass.svg" alt="magnifying glass" />
  </button>
);
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
        <SearchButton otherClasses="sm:hidden" />
      </div>
    </form>
  );
};

export default SearchBar;
