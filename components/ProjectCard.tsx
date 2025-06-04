import React from "react";
import SanityImage from "./SanityImage";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  image: string;
  description: string;
  slug: string;
};

const ProjectCard = ({ title, image, description, slug }: ProjectCardProps) => {
  return (
    <div
      className={`flex flex-col w-full md:w-2/5 max-w-sm justify-between items-cente pb-4`}
    >
      <div className="flex flex-col items-center gap-2">
        <Link
          href={"/projects/" + slug}
          className="outline-primary hover:outline-4 transition ease-in-out duration-300 w-full rounded-4xl overflow-hidden shadow-2xl border border-neutral-400"
        >
          <SanityImage image={image} alt={title} />
        </Link>
        <div className="flex px-4 flex-col items-center md:items-start py-4 gap-4 justify-center mb-4">
          <h3
            className={` font-semibold text-4xl lg:text-5xl   text-outline text-center w-full`}
          >
            {title}
          </h3>

          <p className="prose  prose-lg md:prose-xl  text-pretty text-white">
            {description}
          </p>
          <Link
            className="mt-2 font-semibold underline underline-offset-4 decoration-1  hover:text-primary text-accent self-center text-xl transition-all duration-300 ease-in-out mb-4"
            href={"/projects/" + slug}
          >
            {" "}
          more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
