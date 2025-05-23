import React from "react";
import PageWrapper from "@/components/PageWrapper";
import PostPreview from "@/components/PostCard";
import Link from "next/link";
import { getAllPostsPreview, getCategories } from "@/lib/fetch";

const page = async () => {
  const posts = await getAllPostsPreview();
  const categories = await getCategories();

  return (
    <PageWrapper>
      <div className="">
        <div className="pt-12 flex   flex-wrap justify-center w-full gap-16 sm:gap-8 max-w-7xl mx-auto">
          <div
            className={`flex flex-col bg-primary max-w-72  w-7/8 md:w-full gap-4 border border-neutral-300 justify-center items-center  px-4 py-4 `}
          >
            <h2 className="section-title text-secondary font-bold   ">
              Process
            </h2>
            <p className="text-neutral-200 text-2xl text-center pretty">
              Works in progress, transcriptions and musings.
            </p>
          </div>
          {posts.map((post, i) => (
            <PostPreview
              key={post._id}
              title={post.title}
              slug={post.slug.current}
              image={post.imageUrl}
              description={post.description}
              i={i}
            />
          ))}
        </div>
      </div>
      <div className="w-full flex justify-center mt-20">
        <div className="md:max-w-1/2 mx-16 md:mx-48 flex flex-col items-start justify-start">
          <h3 className="text-3xl text-accent">Tags</h3>
          <div className="justify-center flex flex-wrap">
            {categories.map((category) => (
              <div key={category._id} className="flex flex-wrap">
                <Link
                  href={"/process?tag=" + category.title}
                  className="text-xs bg-white py-1 px-2 m-4 rounded-sm border"
                >
                  {category.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default page;
