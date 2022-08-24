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

interface SearchBarProps extends HTMLAttributes<HTMLInputElement> {
  setRepositories: Dispatch<SetStateAction<Repository[]>>;
  className?: string;
}

export const SearchBar = ({
  setRepositories,
  className,
  ...props
}: SearchBarProps) => {
  const [filter, setFilter] = useState<string>("");

  const miniSearch = new MiniSearch<Repository>({
    fields: ["stacks", "title", "description", "type"],
    searchOptions: {
      boost: { type: 3, stacks: 2, description: 1, title: 0 },
      prefix: true,
      fuzzy: 0.25,
    },
    idField: "title",
    storeFields: [
      "stacks",
      "title",
      "description",
      "type",
      "link",
      "source",
      "pt",
      "en",
      "image",
    ],
  });

  miniSearch.addAll(REPOSITORIES);

  useEffect(() => {
    const filtered_repos = miniSearch.search(filter) as unknown as Repository[];

    setRepositories(
      (prev) =>
        (prev = filtered_repos.length === 0 ? REPOSITORIES : filtered_repos)
    );
  }, [filter]);

  return (
    <div className="w-full center mb-8">
      <input
        {...props}
        className={
          "w-max md:w-1/5 h-10 rounded-lg bg-white dark:bg-brand-light-gray placeholder:dark:text-brand-black-blue placeholder:text-brand-light-gray p-6 drop-shadow-lg " +
          className
        }
        placeholder="Fullstack, react, ..."
        onChange={(e) => setFilter(e.target.value)}
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
