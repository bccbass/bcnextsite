import React from "react";
import Header from "@/components/sections/Header";
import NavMenuItems from "./NavMenuItems";
import Socials from "@/components/Socials"
// import Footer from "@/components/sections/Footer";
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
          <div className="lg:flex flex-col gap-4 text-sm hidden fixed top-1/3 left-8">
            <NavMenuItems classStyle="inset-menu-item" fixed={true} />
            
          </div>

          {/* spacer to compensate for menu items lack of width due to fixed position */}
          <div className="hidden lg:block w-52"></div>
          <div className="lg:w-[74vw] flex justify-center">
            <div className="max-w-7xl w-full flex flex-col items-center">
              <h2
                className={
                  "w-full max-w-6xl text-center page-title text-5xl sm:text-6xl md:text-7xl mb-6 sm:mb-8 lg:mb-10"
                }
              >
                {title}
              </h2>
              {/* ***PAGE CONTENT*** */}
              {children}
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
      <div className="-mb-12">
            <Socials />
            </div>
      <p className="w-full text-center text-xs md:text-sm pb-1">
        Benjamin Campbell © 2025
      </p>
    </div>
  );
};

export default PageWrapper;
