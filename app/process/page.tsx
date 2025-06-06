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
          <Tags categories={categories} />
          <div className="pt-12 flex   flex-wrap justify-center w-full gap-16 sm:gap-x-4 sm:gap-y-10  2xl:gap-8 max-w-7xl mx-auto">
            <PostCardWrapper posts={posts} />
          </div>
        </div>
      </Suspense>
    </PageWrapper>
  );
};

export default page;
