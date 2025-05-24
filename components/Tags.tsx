"use client";
import React from "react";
import Link from "next/link";
import { IoIosCloseCircleOutline } from "react-icons/io";

import { useSearchParams } from "next/navigation";

type CategoryType = { categories: { _id: string; title: string }[] };

const Tags = ({ categories }: CategoryType) => {
  const searchParams = useSearchParams();
  const tag =
    searchParams.get("tag") !== null ? searchParams.get("tag") : "all";

  return (
    <div className="flex w-full items-center justify-end">
      {/* <h3 className="text-2xl  text-primary mr-6">category:</h3> */}
      <div className="justify-center items-center flex flex-wrap gap-4">
        <Link
          href={"/process"}
          className={
            tag == null || tag != "all"
              ? "active-tag"
              : "opacity-0"
          }
        >
          Clear Filter
        </Link>
        {categories.map((category) => (
          <Link
            href={"/process?tag=" + category.title}
            className={
              category.title === tag
                ? "active-tag"
                : "inactive-tag"
            }
          >

            {category.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Tags;
