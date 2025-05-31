import React from "react";
import Header from "@/components/sections/Header";
import NavMenuItems from "./NavMenuItems";

import Footer from "@/components/sections/Footer";
const getFontSize = (text:string) => {
  if (text?.length < 5) return ' text-7xl ';
  if (text?.length < 8) return ' text-6xl ';
  if (text?.length >= 8) return ' text-6xl ';
  return 'text-base';
};
const PageWrapper = ({ children, title }: {title: string; children: React.ReactNode }) => {
  const fontSize = getFontSize(title)
  return (
    <div>
      <Header />
      <div className="page-section z-0 w-full ">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-16 lg:gap-20 relativen">
          <div className="lg:fixed top-4 ">
            <h2 className={"lg:max-w-[25vw] break-words text-center lg:text-start page-title" + fontSize}>{title}</h2>
            <div className="lg:flex flex-col gap-4 text-sm py-30 hidden">
              <NavMenuItems  classStyle="inset-menu-item" />
            </div>
          </div>
          <div className="hidden lg:block w-52 "></div>
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PageWrapper;
