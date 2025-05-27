"use client";
import React from "react";
import { Suspense, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { menuItems } from "@/lib/menuItems";

const NavMenu = ({
  setOpen,
  isOpen,
}: {
  isOpen: boolean;
  setOpen: (arg0: boolean) => void;
}) => {
  const pathname = usePathname();

  const handleEscKey = (event: KeyboardEvent) => {
    if (event.key == "Escape") setOpen(false);
  };

  // Combined approach for both overflow and Lenis
  useEffect(() => {
    // if (!lenis) return;

    if (isOpen) {
      // Stop scrolling using both methods
      document.body.style.overflow = "hidden";
      // console.log('stopping lenis')
      // lenis.stop();

      // Force touch-action none on body for mobile
      document.body.style.touchAction = "none";

      document.addEventListener("keyup", handleEscKey);
    } else {
      // Re-enable scrolling using both methods
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
      // console.log("starting lenis");

      // lenis.start();
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
      document.removeEventListener("keyup", handleEscKey);
      // if (lenis) lenis.start();
      // console.log("returning lenis -> start");
    };
  }, [isOpen]);

  return (
    <motion.div
      initial={{ x: 100 }}
      animate={{ x: 0 }}
      transition={{}}
      className=" bg-primary fixed inset-0 z-20 h-screen overflow-hidden flex flex-col items-center w-full"
    >
      <div className="flex flex-col items-center  z-50 justify-between h-1/2 my-20 text-3xl text-slate-100 font-light cursor-default">
        <div className="flex justify-around mx-auto px-10 md:px-20 py-16 md:py-20 gap-16 flex-wrap max-w-7xl ">
          <div className="flex flex-col gap-4 uppercase font-semibold ">
            <Suspense fallback={<div>Loading...</div>}>
              {menuItems
                .filter((item) => pathname !== item.href)
                .map((item, i) => (
                  <Link
                    key={i}
                    // onClick={() => setOpen(false)}
                    className="menu-item"
                    href={item.href}
                  >
                    {item.title}
                  </Link>
                ))}
            </Suspense>
          </div>
        </div>
      </div>
      <p className="text-neutral-300 text-xs md:text-sm absolute bottom-1">
        Benjamin Campbell © 2025
      </p>
    </motion.div>
  );
};

export default NavMenu;
