/** @format */
import { cache } from "react";
import {
  PostPreview,
  Section,
  WebsiteData,
  SocialsData,
  CategoriesData,
  Post,
  Project,
  DiscographyData,
} from "./types";

import { createClient, groq } from "next-sanity";

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  useCdn: false, // Use `false` if you need fresh data always
  apiVersion: "2023-01-01",
});

export async function getSlugs(
  type: string
): Promise<{ _updatedAt: string; slug: { current: string } }[]> {
  const data = await sanityClient.fetch(
    `*[_type == "${type}"]{_updatedAt, slug }`
  );
  return data;
}
// Example function to fetch projects
export async function getPostsPreview(): Promise<PostPreview[]> {
  return await sanityClient.fetch(groq`
    *[_type == "post"][0...6] | order(sortOrder asc) {
      _id,
      title,
      sortOrder,
     "categories": categories[]->title,
      slug,
      description,
      "imageUrl": mainImage,
    }
  `);
}

export const getAllPostsPreview = cache(async (): Promise<PostPreview[]> => {
  return await sanityClient.fetch(
    groq`
    *[_type == "post"] | order(sortOrder asc) {
      _id,
      title,
      sortOrder,
       "categories": categories[]->title,
      slug,
      description,
      "imageUrl": mainImage,
    }
  `,
    {},
    {
      next: { revalidate: 600 }, // Revalidate every 60 seconds
    }
  );
});
export async function getPost(slug: string): Promise<Post[]> {
  return await sanityClient.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
    _id,
		title,
		description,
		mainImage,
		body,
    displayBodySecondary,
    bodySecondary,
		"slug": slug.current,
    mediaLinks,
    albums,
    projectWebsite,
    pdfMedia[] {
      title,
      "url": document.asset->url 
    }
  }`,
    { slug: slug }
  );
}
export async function getSections(): Promise<Section[]> {
  return await sanityClient.fetch(groq`
    *[_type == "section"] | order(sortOrder asc) {
      _id,
      title,
      sortOrder,
      slug,
      description,
      "imageUrl": mainImage,
    }
  `);
}
export async function getProjects(): Promise<Project[]> {
  return await sanityClient.fetch(groq`
    *[_type == "project"] | order(sortOrder asc) {
      _id,
      title,
      sortOrder,
      
      slug,
      description,
      "imageUrl": mainImage,
    }
  `);
}

export async function getWebsiteData(): Promise<WebsiteData> {
  return await sanityClient.fetch(groq`
    *[_type == "website"][0] {
	heroImage,
	heroTagline,
	biography,
  briefBiography,
	city,
	socialLinks
    }
  `);
}
export async function getDiscographyData(): Promise<DiscographyData> {
  return await sanityClient.fetch(groq`
    *[_type == "discography"][0] {
    title,
    albums
    }
  `);
}
export async function getSocials(): Promise<SocialsData[]> {
  const data = await sanityClient.fetch(`
    *[_type == "website"][0].socialLinks
  `);
  return data;
}
export const getCategories = cache(async (): Promise<CategoriesData[]> => {
  const data = await sanityClient.fetch(
    `
    *[_type == "category"] {
      _id,
      title,
      slug,
      description,
    }
  `,
    {},
    {
      next: { revalidate: 600 }, // Revalidate every 60 seconds
    }
  );
  return data;
});
