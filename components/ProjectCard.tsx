import React from "react";
import SanityImage from "./SanityImage";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  image: string;
  description: string;
  slug: string;
  i: number;
};

const ProjectCard = ({
  title,
  image,
  description,
  slug,
  i,
}: ProjectCardProps) => {
  return (
    <div
      className={`flex flex-col  w-7/8 md:w-2/5 max-w-sm justify-between items-center bg-neutral-50 outline outline-neutral-300 drop-shadow-sm backdrop-blur-2xl pb-4`}
    >
      <div className="flex flex-col items-center gap-2">
        <div className=" w-full">
          <SanityImage image={image} alt={title} />
        </div>
        <div className="flex px-4 flex-col text-pretty items-center md:items-start py-4 gap-2 justify-center mb-4">
          <h3
            className={` font-semibold text-xl  md:text-4xl text-primary text-center w-full`}
          >
            {title}
          </h3>

          <p className="prose  prose-md md:prose-lg  text-pretty">
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
