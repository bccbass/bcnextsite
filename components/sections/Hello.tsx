import React from "react";
import Contact from "@/components/Contact";
const Hello = () => {
  return (
    <div  className="flex flex-col gap-16  bg-secondary px-4 md:px-16 pb-20 md:pb-32 lg:pb-42 min-h-screen">
      {/* spacer to compensate for negative margin of divider */}
      <div className="py-16"></div>
      <div className="flex flex-col justify-center items-center gap-6 md:gap-16 lg:gap-20 w-full">
        <Contact />
      </div>
    </div>
  );
};

export default Hello;
