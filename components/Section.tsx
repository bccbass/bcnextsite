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
      className={` flex flex-col w-7/8 sm:w-full md:w-1/2 lg:w-2/5 max-w-128  h-fit bg-background justify-center items-center md:items-start shadow-2xl border border-neutral-400 rounded-4xl `}
    >
             <h3
            className={`absolute w-fit pl-10 z-10 text-center feature-title tracking-[6] text-4xl md:text-5xl lg:text-6xl uppercase`}
          >
            {title}
          </h3>
      <div
        className="w-full aspect-square overflow-hidden rounded-4xl "
        style={{
          backgroundImage: `url(${urlFor(image).width(1200).height(1200).url()})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className={`flex flex-col ${i % 2 === 0 ? "bg-primary" : "bg-accent"} opacity-80 hover:opacity-95   ease-in-out transition-all backdrop-contrast-150 duration-300 h-full w-full items-center justify-center`}
        >
   
        </div>
      </div>
    </Link>
  );
};

export default Section;
