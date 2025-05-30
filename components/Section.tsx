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
      className={` flex flex-col w-7/8 sm:w-full md:w-1/2 lg:w-2/5 max-w-128  h-fit bg-background justify-center items-center md:items-start outline-8 rounded-4xl `}
    >
      <div
        className="w-full h-128 overflow-hidden rounded-4xl "
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
            className={`${i % 2 !== 0 ? "bg-secondary/60" : "bg-emerald-200/60"} relative top-20 backdrop-blur-3xl backdrop-brightness-50 w-full py-12  text-center  tracking-[6] uppercase font-bold  text-white  `}
          >
            <p className=" outline-title text-4xl md:text-5xl lg:text-6xl ">
            {title}
            </p>
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default Section;
