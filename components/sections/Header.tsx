import React from "react";
import Badge from "@/components/Badge";
import welcomeRiver from "../../public/waterfall.webp";

const Header = () => {
  return (
      <div
      
        style={{
          backgroundImage: `url(${welcomeRiver.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="w-screen flex "
      >
        <div className=" w-screen py-8 sm:py-16 h-max bg-white/60 backdrop-blur-lg  p-2 sm:p-8 top-0 left-0 sticky ">
          <Badge color="text-neutral-100" />
      </div>
    </div>
  );
};

export default Header;
