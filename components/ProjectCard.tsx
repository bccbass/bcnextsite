import React from "react";
import SanityImage from "./SanityImage";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  image: string;
  description: string;
  slug: string;
};

const ProjectCard = ({
  title,
  image,
  description,
  slug,
}: ProjectCardProps) => {
  return (
    <div
      className={`flex flex-col w-full md:w-2/5 max-w-sm justify-between items-cente pb-4`}
    >
      <div className="flex flex-col items-center gap-2">
        <div className=" w-full rounded-4xl overflow-hidden">
          <SanityImage image={image} alt={title} />
        </div>
        <div className="flex px-4 flex-col text-pretty items-center md:items-start py-4 gap-2 justify-center mb-4">
          <h3
            className={` font-semibold text-4xl lg:text-5xl   text-outline text-center w-full`}
          >
            {title}
          </h3>

          <p className="prose  prose-md md:prose-lg  text-pretty text-white">
            {description}
          </p>
        </div>
      </div>
      <Link
        className="theme-button self-center"
        href={"/projects/" + slug}
      >
        {" "}
        More
      </Link>
      {/* <Link
        className=" underline underline-offset-4 decoration-accent  decoration-3 self-center mb-4"
        href={"/projects/" + slug}
      >
        {" "}
        More
      </Link> */}
    </div>
  );
};

export default ProjectCard;
