import { Repository } from './../@types/index';
import MiniSearch, { Options } from "minisearch";
import { useMemo, useState } from "react";

export function useRepoSearch<T>(
  mockUp: Repository[],
  opts: Options
): [searchResults: T[], search: (value: Partial<T>) => void] {
  const [value, setValue] = useState<Repository[]>(mockUp);

  const search = useMemo(() => {
    const miniSearch = new MiniSearch<T>({
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

  return [searchResults, search];
}
