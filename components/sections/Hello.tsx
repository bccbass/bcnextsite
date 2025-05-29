import React from "react";
import Contact from "@/components/Contact";
const Hello = () => {
  return (
    <div id="hello" className="flex flex-col gap-16 section">
      <div className="flex flex-col justify-center items-center gap-6 md:gap-16 lg:gap-20 w-full">
        <h2 className="section-title">Hello</h2>
        <Contact />
      </div>
    </div>
  );
};

export default Hello;
