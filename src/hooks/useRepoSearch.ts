import { REPOSITORIES } from './../constants/Repositories';
import { Repository } from './../@types/index';
import MiniSearch, { Options } from "minisearch";
import { useMemo, useState } from "react";

export function useRepoSearch<T>(
  mockUp: Repository[],
  opts?: Options
): [searchResults: Repository[], search: (value: string) => void] {
  const [value, setValue] = useState(mockUp);
  const [searchResults, setSearchResults] = useState<Repository[]>([])

  const searcher = useMemo(() => {
    const miniSearch = new MiniSearch<Repository>(opts || {
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

    miniSearch.addAll(value);
    return miniSearch;
    
  }, [value]);

  const search = (value: string) => {
    const searches = searcher.search(value) as unknown as Repository[]
    setSearchResults(prev => prev = searches.length === 0 ? mockUp : searches)
  }

  return [searchResults, search];
}
