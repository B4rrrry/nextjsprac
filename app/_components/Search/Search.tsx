"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, FC, InputHTMLAttributes } from "react";
import { useDebouncedCallback } from "use-debounce";

interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {}

const Search: FC<SearchProps> = (props) => {
  const paramsSearch = useSearchParams();

  const pathname = usePathname();

  const { replace } = useRouter();

  const handleChange = useDebouncedCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      const params = new URLSearchParams(paramsSearch);
      params.set("page", "1");
      if (value) {
        params.set("query", value);
      } else {
        params.delete("query");
      }
      replace(`${pathname}?${params.toString()}`);
    },
    300,
  );

  return (
    <input
      type="text"
      name=""
      id=""
      onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
      {...props}
      defaultValue={paramsSearch.get("query")?.toString()}
      className="border-2 rounded-sm mb-2.5"
    />
  );
};

export default Search;
