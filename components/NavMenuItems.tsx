"use client";
import React from "react";
import { Suspense } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuItems } from "@/lib/menuItems";
const NavMenuItems = ({
  classStyle = "menu-item z-0",
  setOpen,
  fixed = false,
}: {
  classStyle?: string;
  setOpen?: (arg0: boolean) => void;
  fixed?: boolean;
}) => {
  const pathname = usePathname();
  const filteredMenuItems = fixed
    ? menuItems.filter((item) => item.href !== "/")
    : menuItems;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {filteredMenuItems
        .filter((item) => pathname !== item.href)
        .map((item, i) => (
          <Link
            role="link"
            aria-label={item.title}
            key={i}
            // Logic to close menu if on homepage and link is an anchor
            onClick={() =>
              setOpen && pathname == "/" && item.href.includes("#")
                ? setOpen(false)
                : null
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
