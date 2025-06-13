import React from "react";
import Link from "next/link";
import { sanityClient } from "@/lib/fetch";
import { groq } from "next-sanity";

// This component dynamically gathers menu items from sanity and creates a footer menu section.

export async function getMenuItems(
  type: string,
  limit?: number
): Promise<{ title: string; slug: { current: string; title: string } }[]> {
  return await sanityClient.fetch(groq`
    *[_type == '${type}']${limit ? `[0...${limit}]` : ""} | order(sortOrder asc) {
      title,
      slug,
    }
  `);
}

const FooterProcessItems = async ({
  title,
  type,
  limit,
}: {
  title: string;

  type: string;
  limit?: number;
}) => {
  const menuItems = await getMenuItems(type, limit);
  //   console.log("menuItems", menuItems);
  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-8 flex-1  ">
      <h3 className="text-2xl feature-title-subtle">{title}</h3>
      <div className="flex flex-col gap-2">
        {menuItems.map((item) => (
          <Link key={item.slug.current} href={"/process/" + item.slug.current}>
            {item.title}
          </Link>
        ))}
        <Link key={"all"} href={"process"} className="font-bold">
          See all posts
        </Link>
      </div>
    </div>
  );
};

export default FooterProcessItems;
