"use client";

import { FC } from "react";
import { Combobox, Transition } from "@headlessui/react";

interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

const SearchManufacturer: FC<SearchManufacturerProps> = ({
  manufacturer,
  setManufacturer,
}) => {
  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]"></Combobox.Button>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
