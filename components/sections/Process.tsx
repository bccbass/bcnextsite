import React from "react";
import { getPosts } from "@/lib/fetch";
import Link from "next/link";
import PostPreview from "../PostPreview";

const Process = async () => {
  const sections = await getPosts();

  return (
    <div className="flex flex-col gap-16 section pt-16">
      <div className="  flex flex-col md:flex-row gap-6 md:gap-16 lg:gap-20">
        <h2 className="section-title text-accent ">Process</h2>
        <div className="prose prose-lg pretty ">
          <div>
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
      </div>
      <div className="pt-12 flex  flex-wrap justify-center w-full gap-16 sm:gap-8 ">
        {sections.map((section, i) => (
          <PostPreview
            key={section._id}
            title={section.title}
            slug={section.slug.current}
            image={section.imageUrl}
            description={section.description}
            i={i}
          />
        ))}
      </div>
      <div className="w-full flex justify-center">
        <Link className="theme-button   mx-10" href={"/process"}>
          {" "}
          More Posts
        </Link>
      </div>
    </div>
  );
};

export default Process;
