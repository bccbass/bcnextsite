/** @format */
import type { PortableTextBlock } from "@sanity/types";


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
  