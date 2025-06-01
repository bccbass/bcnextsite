import React from "react";
import { getPostsPreview } from "@/lib/fetch";
import Link from "next/link";
import PostCard from "../PostCard";
// import TitleCard from "../TitleCard";

const Process = async () => {
  const posts = await getPostsPreview();

  return (
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
  );
};

export default Process;
