
'use client'
import React from 'react'
import Link from "next/link";
import { useParams } from 'next/navigation'
import { getCategories } from "@/lib/fetch";



const Tags = async () => {
  const categories = await getCategories();
    const params = useParams<{ tag: string; }>()
// console.log(params.tag)
  
    return (
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
  )
}

export default Tags