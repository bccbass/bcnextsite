import React from "react";
import Contact from "@/components/Contact";
const Hello = () => {
  return (
    <div id="hello" className="flex flex-col gap-16  section">
      {/* spacer to compensate for negative margin of divider */}
      {/* <div className="h-32"></div> */}
      <div className="flex flex-col justify-center items-center gap-6 md:gap-16 lg:gap-20 w-full">
        <Contact />
      </div>
    </div>
  );
};

export default Hello;
