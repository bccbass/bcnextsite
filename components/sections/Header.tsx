import React from "react";
import Badge from "@/components/Badge";
// import welcomeRiver from "../../public/waterfall.webp";

const Header = () => {
  return (
    <div
      // style={{
      //   backgroundImage: `url(${welcomeRiver.src})`,
      //   backgroundPosition: "center",
      //   backgroundSize: "cover",
      // }}
      className="w-screen flex border-b border-neutral-400"
    >
      <div className=" w-screen py-4 sm:py-6 h-max   p-2 sm:px-4 top-0 left-0 sticky ">
        <Badge color="text-neutral-100" />
      </div>
    </div>
  );
};

export default Header;
