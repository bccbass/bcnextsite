import React from "react";
// import SanityImage from "./SanityImage";
import { urlFor } from "../lib/sanityImage";

import Link from "next/link";
type SectionProps = {
  title: string;
  image: string;
  slug: string;
  i: number;
};

const Section = ({ title, image, slug, i }: SectionProps) => {
  return (
    // <div className={`flex flex-col  w-7/8 sm:w-3/5 md:w-full max-w-5xl ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6   border-neutral-300 justify-center items-center md:items-start px-6 py-10 `}>
    //   <div className="w-70 md:w-xl lg:w-xl outline p-0.5 outline-neutral-300">
    //     <SanityImage image={image} alt={title} />
    //   </div>
    //   <div className="flex flex-col items-center   md:items-start w-4/5">
    //   <div className="flex flex-col items-center md:items-start  gap-6 mb-12">
    //     <h3 className={` text-3xl section-title md:text-4xl lg:text-5xl text-secondary`}>{title}</h3>

    //     <p className="prose prose-md md:prose-lg text-neutral-600">{description}</p>
    //   </div>
    //     <Link className="theme-button self-center my-20 m-12" href={"/" + slug}>
    //       {" "}
    //       More
    //     </Link>
    //   </div>
    // </div>
    <Link
      href={"/" + slug}
      className={`flex flex-col  rounded-md w-7/8 p-1 border sm:w-1/2 md:w-1/2 max-w-4xl ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-6 h-fit bg-primary outline-4 outline-primary border-pink-300 justify-center items-center md:items-start `}
    >
      <div
        className="w-128 h-128 rounded-md overflow-hidden"
        style={{
          backgroundImage: `url(${urlFor(image).width(1200).height(1200).url()})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* <div className="absolute w-70 md:w-lg lg:w-sm h-96 bg-accent/10   contrast-200 bg-blend-color-burn "></div> */}
        {/* <SanityImage image={image} alt={title} /> */}
      </div>
      <div className="flex flex-col  h-32 mt-36 absolute items-center justify-center my-auto rounded-sm overflow-hidden   md:items-start backdrop-invert-100 p-4 backdrop-blur-xs">
        <h3
          className={` text-5xl px-20 text-center font-feature tracking-[6]  uppercase w-full  md:text-6xl lg:text-7xl font-bold  text-inverse-100 text-white bg-accent/50 backdrop-blur-sm  border-neutral-300 border-2 rounded-md p-4`}
        >
          {title}
        </h3>
      </div>
    </Link>
  );
};

export default Section;
