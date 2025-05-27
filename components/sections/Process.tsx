import React from "react";
import { getPostsPreview } from "@/lib/fetch";
import Link from "next/link";
import PostCard from "../PostCard";
// import TitleCard from "../TitleCard";

const Process = async () => {
  const posts = await getPostsPreview();

  return (
    <div className="flex flex-col gap-4 section">
      <div className="flex flex-col justify-center md:flex-row gap-6 md:gap-16 pt-10">
        <h2 className="section-title    ">Process</h2>{" "}
        {/* <div className="prose prose-lg pretty ">
          <div className="text-neutral-400">
 A space to share the nuts and bolts of the creative process: works
            in progress, transcriptions, musings and any other elements that
            might be orphaned from a larger collection of work, worthy of its
            own domain. To use the parlance of our time: a
            <Link href="/process" className="font-fold">
              {" "}
              blog
            </Link>
            .
          </div>
        </div> */}
      </div>
      {/* <div className="  bg-primary border border-white outline-2 outline-primary  py-10 px-6  flex flex-col md:flex-row gap-6 md:gap-16 lg:gap-20">
        <h2 className="section-title text-accent ">Process</h2>{" "}
        <div className="prose prose-lg pretty ">
          <div className="text-neutral-100">
            A space to share the nuts and bolts of the creative process: works
            in progress, transcriptions, musings and any other elements that
            might be orphaned from a larger collection of work, worthy of its
            own domain. To use the parlance of our time: a
            <Link href="/process" className="font-fold">
              {" "}
              blog
            </Link>
            .
          </div>
        </div>
      </div> */}
      <div className="pt-12 flex flex-wrap justify-center md:justify-start w-full gap-16 sm:gap-x-10 lg:gap-y-20 ">
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
            description={post.description}
          />
        ))}
      </div>
      <div className="w-full flex justify-center my-16">
        <Link className="theme-button   mx-10" href={"/process"}>
          {" "}
          More Posts
        </Link>
      </div>
    </div>
  );
};

export default Process;
