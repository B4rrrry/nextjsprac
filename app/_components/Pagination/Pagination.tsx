"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { FC } from "react";

type PaginationProps = {
  pages: number;
};

const Pagination: FC<PaginationProps> = (props) => {
  const { pages } = props;
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleClick = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <ul className="flex">
      {Array.from({ length: pages }, (_, index) => (
        <li
          className="border-2 rounded-sm mr-4 p-2 pl-4 pr-4 cursor-pointer"
          key={index}
          onClick={() => handleClick(index + 1)}
        >
          {index + 1}
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
