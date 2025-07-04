
'use client'
import React from 'react'
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


    return (
        posts.length === 0
          ? <div className="flex h-72 justify-center items-center m-auto w-fit">
              <h1 className="text-2xl md:text-4xl">Sorry,  no posts found</h1>
            </div>
          :
     posts.map((post) => (
            <PostCard
              key={post._id}
              title={post.title}
              slug={post.slug.current}
              image={post.imageUrl}
              categories={post.categories}
              description={post.description}
            />
          ))
  )
}

export default PostCardWrapper