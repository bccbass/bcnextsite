import React from "react";
import { Suspense } from "react";
import { Metadata } from "next";
import PageWrapper from "@/components/PageWrapper";
import PostCardWrapper from "@/components/PostCardWrapper";
import Tags from "@/components/Tags";
import { getAllPostsPreview, getCategories } from "@/lib/fetch";



// NextJS looks for generateMetadata on build. This function adds directives to <head> alerting search indexing services to iginore if there are search params (ie. ?tags=<your tag>)
interface Props {
  params: { [key: string]: string | string[] | undefined }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  // Await searchParams before using its properties
  const resolvedSearchParams = await searchParams
  
  // Check if specific search params are present
  const hasFilterParams = resolvedSearchParams.tag || resolvedSearchParams.filter || resolvedSearchParams.sort
  // Or check for any search params:
  // const hasSearchParams = Object.keys(resolvedSearchParams).length > 0
  
  if (hasFilterParams) {
    return {
      robots: {
        index: false,
        follow: false,
      }
    }
  }
  
  // Default metadata when no search params
  return {
    title: 'Process',
    description: 'Bass transcriptions and analysis',
    // Add other default metadata here
  keywords: ["bass transcriptions", "bass lessons"],
  }
}


const page = async () => {
  const posts = await getAllPostsPreview();
  const categories = await getCategories();

  return (
    <PageWrapper title="Process">
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
