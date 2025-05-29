"use client";
import React from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import NavMenuItems from "./NavMenuItems";
const NavMenu = ({
  setOpen,
  isOpen,
}: {
  isOpen: boolean;
  setOpen: (arg0: boolean) => void;
}) => {

  // Combined approach for both overflow and Lenis
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key == "Escape") setOpen(false);
    };
    if (isOpen) {
      // Stop scrolling using both methods
      document.body.style.overflow = "hidden";

      // Force touch-action none on body for mobile
      document.body.style.touchAction = "none";

      document.addEventListener("keyup", handleEscKey);
    } else {
      // Re-enable scrolling using both methods
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
      document.removeEventListener("keyup", handleEscKey);
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
          <div className="flex flex-col gap-4 lg:gap-8 uppercase font-semibold ">
    <NavMenuItems />
          </div>
        </div>
      </div>
      {/* <p className="text-neutral-300 text-xs md:text-sm absolute bottom-1">
        Benjamin Campbell © 2025
      </p> */}
    </motion.div>
  );
};

export default NavMenu;
