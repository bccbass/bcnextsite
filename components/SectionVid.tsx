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

const SectionVid = ({ title, image, slug, i }: SectionProps) => {
  return (
    <Link
      href={"/" + slug}
      className={` flex flex-col w-7/8 sm:w-full  lg:w-2/5 max-w-128 overflow-hidden  h-fit bg-background justify-center items-center md:items-start shadow-2xl border border-neutral-200 rounded-4xl `}
    >
      <div
        className="w-full aspect-video overflow-hidden"
        style={{
          backgroundImage: `url(${urlFor(image).width(1200).height(1200).url()})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className={`flex flex-col bg-secondary  opacity-95 hover:opacity-85    ease-in-out transition-all backdrop-contrast-150 duration-300 pb-4 w-full items-center justify-center`}
        >
          <h3
            className={`title-primary text-center  tracking-[6] text-5xl lg:text-6xl uppercase`}
          >
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default SectionVid;
