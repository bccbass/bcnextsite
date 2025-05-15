import React from "react";
import SanityImage from "./SanityImage";
import Link from "next/link";
type SectionProps = {
  title: string;
  image: string;
  description: string;
  slug: string;
  i: number;
};

const Section = ({ title, image, description, slug, i }: SectionProps) => {
  return (
    <div className={`flex flex-col  w-7/8 sm:w-3/5 md:w-full max-w-5xl ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6   border-neutral-300 justify-center items-center md:items-start px-6 py-10 `}>
      <div className="w-70 md:w-xl lg:md:w-xl outline p-0.5 outline-neutral-300">
        <SanityImage image={image} alt={title} />
      </div>
      <div className="flex flex-col items-center   md:items-start">
      <div className="flex flex-col items-center md:items-start  gap-6 mb-12">
        <h3 className={` text-3xl section-title md:text-4xl lg:text-5xl text-secondary`}>{title}</h3>

        <p className="prose prose-md md:prose-lg text-neutral-600">{description}</p>
      </div>
        <Link className="theme-button self-center my-20 m-12" href={"/" + slug}>
          {" "}
          More
        </Link>
      </div>
    </div>
  );
};

export default Section;
