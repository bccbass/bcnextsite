import React from "react";
import SanityImage from "./SanityImage";
import FadeIn from "./FadeIn";
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
    <FadeIn y={false} random>
    
    <div
      className={`flex flex-col shadow-2xl rounded-2xl w-full md:max-w-72  md:w-full gap-2  bg-neutral-400 300 justify-between items-center  `}
    >
      <div className="flex flex-col items-center gap-2">
        <div className=" w-full rounded-t-2xl overflow-hidden">
          <SanityImage image={image} alt={title} />
        </div>
        <div className="flex flex-col text-pretty items-center gap-3 justify-center mb-8 p-6 md:p-4">
          <h3 className={` font-semibold text-3xl text-outline text-center w-full`}>
            {title}
          </h3>

          <p className="text-lg p-4 rounded-lg text-center bg-white/30 my-4 invert text-neutral-800">
            {description}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center mb-4 justify-center w-full gap-6">
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
      </FadeIn>

  );
};

export default PostCard;
