import React from "react";
import Link from "next/link";
import Socials from "../Socials";
import { footerMenuItems } from "@/lib/menuItems";
import FooterProcessItems from "./FooterProcessItems";
import FooterExploreItems from "./FooterExploreItems";

const Footer = async () => {
  return (
    <footer className="w-screen bg-primary text-white">
      <div className="flex justify-around mx-auto px-10 md:px-20 py-16 md:py-20 gap-16 flex-wrap max-w-7xl ">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-8 flex-1  ">
          <h4 className="text-2xl feature-title-subtle">Section</h4>
          <div className="flex flex-col gap-2">
            {footerMenuItems.map((item) => (
              <Link key={item.href} href={"/"}>
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        <FooterExploreItems />
        <FooterProcessItems title="process" type="post" limit={4} />
      </div>
      <Socials />
      <p className="w-full text-center text-xs md:text-sm pb-1">
        Benjamin Campbell © 2025
      </p>
    </footer>
  );
};

export default Footer;
