/** @format */
import { Post, Section, WebsiteData, SocialsData } from "./types";

import { createClient, groq } from "next-sanity";

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  useCdn: false, // Use `false` if you need fresh data always
  apiVersion: "2023-01-01",
});

// Example function to fetch projects
export async function getPosts(): Promise<Post[]> {
  return await sanityClient.fetch(groq`
    *[_type == "post"] | order(sortOrder asc) {
      _id,
      title,
      sortOrder,
      slug,
      description,
      "imageUrl": mainImage,
    }
  `);
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
export async function getSocials(): Promise<SocialsData[]> {
  const data = await sanityClient.fetch(`
    *[_type == "website"][0].socialLinks
  `);
  return data;
}
