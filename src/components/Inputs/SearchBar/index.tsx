import {
  HTMLAttributes,
} from "react";
import SearchIcon from "/icons/magnifying-glass.svg";

interface SearchBarProps extends HTMLAttributes<HTMLInputElement> {
  className?: string;
  search: (value: string) => void;
}

export const SearchBar = ({
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
