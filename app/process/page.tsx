import React from "react";
import { Suspense } from "react";
import PageWrapper from "@/components/PageWrapper";
// import PageTitle from "@/components/PageTitle";
import PostCardWrapper from "@/components/PostCardWrapper";
import Tags from "@/components/Tags";

import { getAllPostsPreview, getCategories } from "@/lib/fetch";

const page = async () => {

  const posts = await getAllPostsPreview();
  const categories = await getCategories();

  return (
    <PageWrapper title="Process">
      {/* <PageTitle title="Process" description="Works in progress, transcriptions and musings." /> */}
      <Suspense fallback={<div>Loading...</div>}>
      <div className="">
        < Tags categories={categories} />

        <div className="pt-12 flex   flex-wrap justify-start w-full gap-16 sm:gap-8 max-w-7xl mx-auto">
          
          {/* <div
            className={`flex flex-col  max-w-72 min-h-128  w-7/8 md:w-full gap-4 rounded-2xl border border-neutral-300 justify-center items-center  px-4 py-4 `}
          >
            <h2 className="section-title-sm text-secondary font-bold   ">
              Process
            </h2>
            <p className="text-neutral-200 text-2xl text-center pretty">
              Works in progress, transcriptions and musings.
            </p>
          </div> */}
         < PostCardWrapper posts={posts} />
        </div>
      </div>
</Suspense>
    </PageWrapper>
  );
};

export default page;
