"use client";
import React from "react";
import { useState } from "react";
import NavMenu from "./NavMenu";
import { Cross as Hamburger } from "hamburger-react";

function NavHamburger({ homePage = false }: { homePage?: boolean }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div
        role="button"
        aria-label="hamburger-menu-button"
        className={`top-4 right-8 z-50 fixed ${homePage ? "" : "lg:hidden"}`}
      >
        <Hamburger
          aria-label="hamburger-menu-button"
          toggled={isOpen}
          toggle={setOpen}
          direction="left"
          distance="lg"
          rounded
          size={36}
          color={isOpen ? "white" : "var(--color-neutral-200)"}
        />
      </div>
      {isOpen && <NavMenu setOpen={setOpen} isOpen={isOpen} />}
    </>
  );
}

export default NavHamburger;
