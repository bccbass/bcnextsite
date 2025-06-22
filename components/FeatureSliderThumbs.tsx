import React from "react";
import { PostPreview } from "@/lib/types";
import SanityImage from "./SanityImage";

const FeatureSliderThumbs = ({
  posts,
  activeID,
  handleClick,
}: {
  posts: PostPreview[];
  activeID: string;
  handleClick: (id: string) => void;
}) => {
  return (
    <div className="flex gap-4 mx-4 lg:mt-12 justify-center">
      {posts.map((post) => (
        <button
          aria-label={post.title}

          className={`pt-2 lg:border-t-4 ${post._id == activeID ? " border-accent " : "border-neutral-600"} lg:w-1/5 z-10 text-neutral-600 flex `}
          onClick={() => handleClick(post._id)}
          key={post._id}
        >
          <div className="hidden lg:flex justify-between">
            <div className="w-2/5">
            <SanityImage
              image={post.imageUrl}
              alt={post.title}
              height={80}
              width={80}
            />
            </div>
            <p className="w-3/5"> {post.title}</p>
          </div>
          <div
            className={`lg:hidden mx-3 outline rounded-full w-2 h-2 ${post._id == activeID ? " outline-accent bg-white outline-4" : "bg-neutral-600"}`}
          ></div>
        </button>
      ))}
    </div>
  );
};

export default FeatureSliderThumbs;
