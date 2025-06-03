import React from "react";
import Link from "next/link";

const HeaderBadge = ({ color }: { color?: string }) => {
  return (
    <Link
      href={"/"}
      className={`uppercase hidden z-30 lg:block fixed  w-3/4  gap-2 overflow-hidden  px-8 py-4`}
    >
      <h1
        className={`${color} badge-title text-4xl   uppercase sm:text-5xl  -tracking-[.15rem]`}
      >
        BC
      </h1>
      {/* <h2 className={`${ color } text-sm sm:text-xl font-feature md:text-lg md:tracking-[.12rem]`}>
            Bassist | Composer | Educator
          </h2> */}
    </Link>
  );
};

export default HeaderBadge;
