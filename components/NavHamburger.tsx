'use client';
import React from "react";
import { useState } from "react";
import NavMenu from "./NavMenu";
import { Cross as Hamburger } from "hamburger-react";


function NavHamburger() {
    const [isOpen, setOpen] = useState(false);
    

  return (
    <>
      

      <div className={`top-4 right-8 z-50 fixed`}>
        <Hamburger
        //   className=""
          // onClick={handleNavToggle}
          toggled={isOpen}
          toggle={setOpen}
          direction="left"
          distance="lg"
          rounded
          size={36}
          color={isOpen ? "white" : "var(--color-neutral-200)"}
        />
      </div>
      {isOpen && (
        <NavMenu setOpen={setOpen} isOpen={isOpen}  />
      )}
    </>
  );
}

export default NavHamburger;
