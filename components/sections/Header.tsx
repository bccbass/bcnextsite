import React from "react";
import HeaderBadge from "@/components/HeaderBadge";
// import welcomeRiver from "../../public/waterfall.webp";
import NavHamburger from "../NavHamburger";

const Header = () => {
  return (
    <div className="w-full z-50">
      <HeaderBadge color="text-neutral-100" />
      <NavHamburger />
    </div>
  );
};

export default Header;
