import React from "react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <div className="section">{children}</div>
      <Footer />
    </div>
  );
};

export default PageWrapper;
