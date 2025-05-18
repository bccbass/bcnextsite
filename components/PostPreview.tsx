import React from "react";
import SanityImage from "./SanityImage";
import Link from "next/link";
type PostPreviewProps = {
  title: string;
  image: string;
  description: string;
  slug: string;
  i: number;
};

const PostPreview = ({
  title,
  image,
  description,
  slug,
  i,
}: PostPreviewProps) => {
  return (
    <div
      className={`flex flex-col max-w-72  w-7/8 md:w-full gap-2 border border-neutral-300 justify-between items-center  px-4 py-4 `}
    >
      <div className="flex flex-col items-center gap-2">
        <div className=" w-full  sm:w-60 ">
          <SanityImage image={image} alt={title} />
        </div>
        <div className="flex flex-col text-pretty items-center md:items-start  gap-2 justify-center mb-4">
          <h3 className={` font-semibold text-xl  md:text-2xl text-primary`}>
            {title}
          </h3>

          <p className="prose  prose-md md:prose-lg text-neutral-600">
            {description}
          </p>
        </div>
   
      </div>
           <Link className=" theme-button self-center " href={"/process/" + slug}>
          {" "}
          More
        </Link>
    </div>
  );
};

export default PostPreview;
