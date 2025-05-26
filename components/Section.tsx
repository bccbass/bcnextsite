import React from "react";
import { urlFor } from "../lib/sanityImage";

import Link from "next/link";
type SectionProps = {
  title: string;
  image: string;
  description: string;
  slug: string;
  i: number;
};

// const fontSize = (str: string) => str.length < 10 ? 'text-5xl md:text-6xl lg:text-7xl' : 'text-4xl md:text-5xl lg:text-5xl'

const Section = ({ title, image, slug, i }: SectionProps) => {
  return (
    <Link
      href={"/" + slug}
      className={`flex flex-col w-screen  md:w-1/2 lg:w-2/5 max-w-128  h-fit bg-primary justify-center items-center md:items-start `}
    >
      <div
        className="w-screen sm:w-full h-128 overflow-hidden outline-1 outline-neutral-400"
        style={{
          backgroundImage: `url(${urlFor(image).width(1200).height(1200).url()})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className={`flex flex-col ${i % 2 === 0 ? "bg-primary/50" : "bg-accent/50"} backdrop-grayscale-100 backdrop-contrast-100  ease-in-out transition-all hover:backdrop-contrast-150 duration-300 h-full w-full items-center justify-center`}
        >
          <h3
            className={`${i % 2 !== 0 ? "bg-secondary/60" : "bg-emerald-200/60"} relative top-20 text-3xl sm:text-4xl backdrop-blur-3xl backdrop-brightness-50 md:text-4xl w-full   py-12  text-center font-feature tracking-[6] uppercase font-bold  text-white  `}
          >
            <p className="section-title-sm">
            {title}
            </p>
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default Section;
