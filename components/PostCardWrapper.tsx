
'use client'
import React from 'react'
import { useSearchParams } from 'next/navigation';
import PostCard from "@/components/PostCard";

type PostCardWrapperProps = {
  posts: {
    _id: string;
    title: string;
    slug: { current: string };
    imageUrl: string;
    categories: string[];
    description: string;
  }[];
};
const PostCardWrapper = ({posts}:PostCardWrapperProps) => {
    const searchParams = useSearchParams();
    const tag = searchParams.get("tag") !== null ? searchParams.get("tag") : "all";
    const filteredPosts = posts.filter((post) => {
        if (tag === "all") return true;
        return post?.categories?.includes(tag? tag : "all");
      });

    return (
        filteredPosts.length === 0
          ? <div className="flex justify-center items-center m-auto w-fit h-full">
              <h1 className="text-2xl md:text-4xl">Sorry, no posts found</h1>
            </div>
          :
     filteredPosts.map((post, i) => (
            <PostCard
              key={post._id}
              title={post.title}
              slug={post.slug.current}
              image={post.imageUrl}
              description={post.description}
            />
          ))
  )
}

export default PostCardWrapper