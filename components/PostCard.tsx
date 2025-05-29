import React from "react";
import SanityImage from "./SanityImage";
import Link from "next/link";
type PostCardProps = {
  title: string;
  image: string;
  description: string;
  categories: string[];
  slug: string;
};

const PostCard = ({
  title,
  image,
  description,
  slug,
  categories,
}: PostCardProps) => {

  return (
    <div
      className={`flex flex-col rounded-2xl w-full md:max-w-72  md:w-full gap-2 border  border-neutral-500 justify-between items-center  px-2 py-3 `}
    >
      <div className="flex flex-col items-center gap-2">
        <div className=" w-full rounded-2xl overflow-hidden">
          <SanityImage image={image} alt={title} />
        </div>
        <div className="flex flex-col text-pretty items-center md:items-start  gap-3 justify-center mb-8 px-2">
          <h3 className={` font-semibold text-xl  md:text-2xl text-primary`}>
            {title}
          </h3>

          <p className="prose  prose-md md:prose-lg text-neutral-100">
            {description}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full gap-6">
        <div className="flex flex-wrap gap-2">
          {categories?.map((tag, i) => (
            <Link key={i} href={"/process?tag=" + tag} className="tag">
              {tag}
            </Link>
          ))}
        </div>

        <Link
          className=" rounded-button self-center "
          href={"/process/" + slug}
        >
          {" "}
          More
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
