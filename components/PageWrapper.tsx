import React from "react";
import Header from "@/components/sections/Header";
import NavMenuItems from "./NavMenuItems";

import Footer from "@/components/sections/Footer";
// const getFontSize = (text: string) => {
//   if (text?.length < 5) return " text-7xl ";
//   if (text?.length < 8) return " text-6xl ";
//   if (text?.length >= 8) return " text-6xl ";
//   return "text-base";
// };
const PageWrapper = ({
  children,
  title = "",
}: {
  title?: string;
  children: React.ReactNode;
}) => {
  // const fontSize = getFontSize(title);
  return (
    <div>
      <Header />
      <div className="page-section z-0 w-full">
        <div className="flex flex-col lg:flex-row  gap-6 md:gap-16 lg:gap-0 ">
          <div className="lg:fixed top-1/3 left-12">
            <div className="lg:flex flex-col gap-4 text-sm hidden ">
              <NavMenuItems classStyle="inset-menu-item" />
            </div>
          </div>
          {/* spacer to compensate for menu items lack of width due to fixed position */}
          <div className="hidden lg:block w-52"></div>
          <div className="lg:w-[74vw] flex justify-center">
            <div className="max-w-6xl w-full flex flex-col items-center">
              <h2
                className={
                  "w-full text-center page-title text-5xl sm:text-6xl md:text-7xl mb-12 sm:mb-20 lg:mb-32"
                }
              >
                {title}
              </h2>
              {children}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PageWrapper;
