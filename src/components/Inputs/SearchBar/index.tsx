import {
  Dispatch,
  HTMLAttributes,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { Repository } from "../../../@types";
import { REPOSITORIES } from "../../../constants";
import MiniSearch from "minisearch";
import SearchIcon from "/icons/magnifying-glass.svg";
import { useRepoSearch } from "../../../hooks";

interface SearchBarProps extends HTMLAttributes<HTMLInputElement> {
  className?: string;
  searchResults: Repository[];
  search: (value: string) => void;
}

export const SearchBar = ({
  searchResults,
  search,
  className,
  ...props
}: SearchBarProps) => {

  return (
    <div className="w-full center mb-8">
      <input
        {...props}
        className={
          "w-max md:w-1/5 h-10 rounded-lg bg-white dark:bg-brand-light-gray placeholder:dark:text-brand-black-blue placeholder:text-brand-light-gray p-6 drop-shadow-lg " +
          className
        }
        placeholder="Fullstack, react, ..."
        onChange={(e) => search(e.target.value)}
      />
      <img
        src={SearchIcon}
        alt="search"
        title="Buscar"
        className="w-12 ml-5"
      />
    </div>
  );
};
