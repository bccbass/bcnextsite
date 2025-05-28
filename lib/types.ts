/** @format */
// import type { PortableTextBlock } from "@sanity/types";

export interface PostPreview {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  description: string;
  imageUrl: string;
  sortOrder: number;
  categories: string[];
  body: "block";
  displayBodySecondary: boolean;
  bodySecondary: "block";
  albums: object[];
  pdfMedia: object[];
  mediaLinks: object[];
}

export interface Post {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  description: string;
  imageUrl: string;
  sortOrder: number;
  categories: string[];
  body: "block";
  displayBodySecondary: boolean;
  bodySecondary: "block";
  albums: object[];
  pdfMedia: object[];
  mediaLinks: object[];
}
export interface DiscographyData {
  _id: string;
  title: string;
  albums: {
    title: string;
    artist: string;
    label: string;
    role: string;
    image: string;
    purchaseLink?: string | undefined;
    vinyl: boolean;
    links: { platform: string; url: string }[];
  }[];
}

export interface Section {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  description: string;
  imageUrl: string;
  sortOrder: number;
  categories: string[];
  body: "block";
  displayBodySecondary: boolean;
  bodySecondary: "block";
  albums: object[];
  pdfMedia: object[];
  mediaLinks: object[];
}

export interface Project {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  description: string;
  imageUrl: string;
  sortOrder: number;
  categories: string[];
  body: "block";
  displayBodySecondary: boolean;
  bodySecondary: "block";
  albums: object[];
  pdfMedia: object[];
  mediaLinks: object[];
}

export interface WebsiteData {
  heroImage: string;
  heroTagline: string;
  briefBiography: "block";
  biography: "block";
  city: string;
  socialLinks: object[];
}
export interface SocialsData {
  platform: string;
  url: string;
}

export interface CategoriesData {
  _id: string;
  title: string;
  slug: string;
  description: string;
}
