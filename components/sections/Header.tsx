import React from "react";
import Badge from "@/components/Badge";
import welcomeRiver from '../../public/waterfall.webp'

const Header = () => {
  return (
    <div
        style={{ backgroundImage: `url(${welcomeRiver.src})`, backgroundPosition: 'center', backgroundSize: 'cover' }}
    className="w-screen flex py-8 ">

      <div className=" w-screen p-8 top-0 left-0 sticky ">
      <Badge color='text-secondary'/>

      </div>

    </div>
  );
};

export default Header;
