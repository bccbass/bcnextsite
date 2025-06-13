import React from "react";
import Link from "next/link";
import { sanityClient } from "@/lib/fetch";
import { groq } from "next-sanity";

// This component dynamically gathers menu items from sanity and creates a footer menu section.

export async function getMenuItems(queryType: string): Promise<
  { title: string; slug: { current: string; title: string } }[]
> {
  return await sanityClient.fetch(groq`
    *[_type == '${queryType}'  ] 
  `);
}

const FooterExploreItems = async () => {
    const sectionItems = await getMenuItems('section');
    const projectItems = await getMenuItems('project');

    return (
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-8 flex-1  ">
      <h3 className="text-2xl feature-title-subtle">Explore</h3>
      <div className="flex flex-col gap-2">
        {sectionItems.map((item) => (
          <Link key={item.slug.current} href={'/' + item.slug.current}>
            {item.title}
          </Link>
        ))}
        {projectItems.map((item) => (
          <Link key={item.slug.current} href={'/projects/' + item.slug.current}>
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterExploreItems;
