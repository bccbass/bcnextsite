"use client";
import React from "react";
import { Suspense } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuItems } from "@/lib/menuItems";
const NavMenuItems = ({classStyle = 'menu-item'}:{classStyle?: string}) => {
  const pathname = usePathname();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {menuItems
        .filter((item) => pathname !== item.href)
        .map((item, i) => (
          <Link
            key={i}
            // onClick={() => setOpen(false)}
            className={classStyle}
            href={item.href}
          >
            {item.title}
          </Link>
        ))}
    </Suspense>
  );
};

export default NavMenuItems;
