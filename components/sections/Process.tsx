import React from "react";
import { getPostsPreview } from "@/lib/fetch";
import Link from "next/link";
import PostCard from "../PostCard";
// import TitleCard from "../TitleCard";

const Process = async () => {
  const posts = await getPostsPreview();

  return (
    <>  
    <div className="flex flex-col gap-4 section">
      <div className="text-center">
        <h2 className="section-title  pt-20 pb-8  ">Process</h2>{" "}
      
      </div>
      
      <div className="pt-12 flex flex-wrap justify-center  w-full gap-16 sm:gap-x-10 lg:gap-y-20 ">
        {/* <TitleCard title='Process' description='A space to share the nuts and bolts of the creative process: works
            in progress, transcriptions, musings and any other elements that
            might be orphaned from a larger collection of work, worthy of its
            own domain. To use the parlance of our time: a blog.' /> */}
        {posts.map((post) => (
          <PostCard
            key={post._id}
            title={post.title}
            slug={post.slug.current}
            image={post.imageUrl}
            categories={post.categories}
            description={post.description}
          />
        ))}
      </div>
      <div className="w-full flex justify-center mt-16 lg:mt-24">
        <Link className="theme-button" href={"/process"}>
          {" "}
          More Posts
        </Link>
      </div>

    </div>

                <div className=" z-10  drop-shadow-xl   drop-shadow-background -mb-30">
        <div className="w-full min-w-[105rem] z-20">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100">
            <path
              d="M0 0v47.6l5-2c1 0 11 3 12 0 2 3 6-3 6 0 0-4 12 3 12 0 0 3 15-1 17 0 2-2 5-1 6 0 0-2 6 2 6 0s2 4 4 0c5 2 12-3 16 0 2-2 4-3 4 0 0 2 6-1 6 0 1 4 15-2 17 0h7c0 1 3-3 6 0h17c2 2 3 1 6 0h6c1-2 21-1 24 0 2 1 4 2 6 0 0-1 22 4 24 0 0 0 5-3 5 0 2-2 10 2 12 0 2 2 6 1 6 0 2 3 4-2 6 0 1 0 25-2 25 1l10-1c3 1 6 6 7 0 1 5 4-2 6 0 2-2 4 3 5 0h12c6 1 36 2 36 0 0 2 3 0 6 0h6c5-2 7 4 11 0 2 0 15 2 17 0h13c3-4 5 1 7 0h29c0-3 6 0 6 0h5c0 2 16-1 18 0 1 4 9-1 12 0s6-2 6 0c8-2 3 4 13 0h10c3 4 19 1 19 0 2 0 21 1 23-1 1 4 3-1 6 1 1 2 11-1 12-1 3 3 9 0 12 1 3-4 6 1 6 0h6c0-3 5 1 6-1 0 3 2 1 4 1 3 4 10-1 13 0 3-2 6-1 6 0 2 2 2 0 6 0 1-2 6 2 6 0 2 0 4 5 6 0h18c2 3 4 1 6 0l6-1c3 2 12 3 17 1 14 3 18 1 24 0 2-1 3 3 5 0 6 2 10-1 16 0 1 3 6 0 9 0 0-2 3 2 5 0 6-6 8 7 13 0 0-2 5 2 5 0 3 3 10 0 10 0 1 2 5-2 8 0 3-1 8 3 12 0h6c2 1 10 4 12 0h6c1-1 5 2 6 0 1 2 4-1 6 0 0-2 5 3 6-1 2 1 6 5 5 1 1 1 3-2 6 0 2-1 5 3 6 0 0 1 6 2 6 0 2 3 4-4 6 0 0-2 3 2 6 0 3 0 6 3 6 0 5 3 8-1 13 0 3-4 6 1 6 0h5c0-1 9 2 12 0 1-1 9 3 11 0h6c2 2 4 4 7 0 3 2 5-4 5-1 10 4 15-2 18 2 0-1 6 2 6-2 0 0 6-2 6 1 1 6 12 2 12 0 1 3 4-3 7 2 2-2 5 2 5 0 1 5 4-5 6 0 2-1 4 2 6 0 1 3 1 0 5 0V0H0Z"
              fill="var(--color-background)"
            ></path>
          </svg>
        </div>
      </div>
      </>
  );
};

export default Process;
