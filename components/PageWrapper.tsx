import React from "react";
import Header from "@/components/sections/Header";
// import HomeButton from "./HomeButton";

import Footer from "@/components/sections/Footer";
const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <div className="section z-0 w-full pt-36">{children}</div>
      {/* <HomeButton/> */}
      <Footer />
    </div>
  );
};

export default PageWrapper;
