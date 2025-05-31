"use client";
import React from "react";
import { Suspense } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuItems } from "@/lib/menuItems";
const NavMenuItems = ({
  classStyle = "menu-item",
  setOpen,
  
}: {
  classStyle?: string;
  setOpen?: (arg0: boolean) => void;
}) => {
  const pathname = usePathname();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {menuItems
        .filter((item) => pathname !== item.href)
        .map((item, i) => (
          <Link
            key={i}
            // Logic to close menu if on homepage and link is an anchor
            onClick={() =>
             setOpen && pathname == "/" && item.href.includes("#")  ? setOpen(false) : null
            }
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
