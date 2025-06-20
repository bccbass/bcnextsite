/** @format */

import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const sanityClient = createClient({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	dataset: "production",
	useCdn: false,
	apiVersion: "2023-01-01",
});

const builder = imageUrlBuilder(sanityClient);

// Helper function to get optimized image URLs
export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export function urlForFullScreen(source: SanityImageSource) {
  return builder.image(source).width(1920).height(1080).url();
}
export function urlForMedImg(source: SanityImageSource) {
  return builder.image(source).width(1420).height(1420).url();
}
export function urlForSocialMediaImg(source: SanityImageSource) {
  return builder.image(source).width(1200).height(630).url();
}
