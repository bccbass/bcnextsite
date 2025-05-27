import React from "react";
// import Badge from "@/components/Badge";
// import welcomeRiver from "../../public/waterfall.webp";
import NavHamburger from "../NavHamburger";

const Header = () => {
  return (
    <div
      // style={{
      //   backgroundImage: `url(${welcomeRiver.src})`,
      //   backgroundPosition: "center",
      //   backgroundSize: "cover",
      // }}
      className="w-screen flex"
    >
      <div className=" w-screen py-4 sm:py-6 h-max z-50  p-2 sm:px-4 top-0 left-0 sticky ">
        {/* <Badge color="text-neutral-100" /> */}
        < NavHamburger />
      </div>
    </div>
  );
};

export default Header;
