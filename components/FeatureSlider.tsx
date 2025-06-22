"use client";
import React, { useState } from "react";
import { PostPreview } from "@/lib/types";
import { urlFor } from "@/lib/sanityImage";
import Link from "next/link";
import FeatureSliderCard from "./FeatureSliderCard";
import FeatureSliderThumbs from "./FeatureSliderThumbs";
import { BsChevronCompactLeft } from "react-icons/bs";
import { BsChevronCompactRight } from "react-icons/bs";
type SliderProps = {
  posts: PostPreview[];
};

const FeatureSlider = ({ posts }: SliderProps) => {
  const [activeID, setActiveID] = useState(posts[0]._id);
  const activePost = posts.filter((post) => post._id === activeID)[0];
  const handleClick = (id: string) => setActiveID(id);
  const handleFwdArrowClick = () =>
    posts.forEach((post, i) => {
      const isCurrentCard = activePost._id === post._id;
      if (isCurrentCard && posts.length - 1 === i) setActiveID(posts[0]._id);
      else if (isCurrentCard) setActiveID(posts[i + 1]._id);
      else return;
    });
  const handleBackArrowClick = () =>
    posts.forEach((post, i) => {
      const isCurrentCard = activePost._id === post._id;
      if (isCurrentCard && i === 0) setActiveID(posts[posts.length - 1]._id);
      else if (isCurrentCard) setActiveID(posts[i - 1]._id);
      else return;
    });

  return (
    <div
      className="w-screen h-full md:h-fit m-0 relative md:py-16"
      style={{
        backgroundImage: `url(${urlFor(activePost.imageUrl)})`,
        WebkitBackdropFilter: "blur(50px)",
        backdropFilter: "blur(50px)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div
        className="w-full h-full -z-10 absolute top-0 bg-white/40 p-6"
        style={{
          WebkitBackdropFilter: "blur(50px)",
          backdropFilter: "blur(50px)",
        }}
      />

      <div className="z-10 flex flex-col h-screen sm:h-fit items-center justify-between lg:justify-center ">
        <div className="flex justify-between items-center w-full h-fit mt-4 sm:mt-12">
          <button
          aria-label="previous post"
            onClick={() => handleBackArrowClick()}
            className="text-8xl text-secondary flex-1/12 hidden md:block"
          >
            <BsChevronCompactLeft />
          </button>
          <div className="flex-10/12 mx-10 md:mx-0 pt-12 sm:pt-0">
            <FeatureSliderCard
              key={activePost._id}
              title={activePost.title}
              description={activePost.description}
              image={activePost.imageUrl}
              slug={activePost.slug.current}
              categories={activePost.categories}
            />
          </div>
          <button
          aria-label="next post"

            onClick={() => handleFwdArrowClick()}
            className="text-8xl text-secondary flex-1/12 hidden md:block"
          >
            <BsChevronCompactRight />
          </button>
        </div>

        <div className="w-full flex flex-col justify-center items-center gap-10 mb-20 md:mb-0 mt-8">
          <FeatureSliderThumbs
            activeID={activeID}
            posts={posts}
            handleClick={handleClick}
          />

          <Link 
          aria-label="See all posts"
           className="theme-button w-fit " href={"/process"}>
            See All Posts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeatureSlider;
