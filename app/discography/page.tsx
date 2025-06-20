import React from "react";
import PageWrapper from "@/components/PageWrapper";
import DiscogAlbums from "@/components/DiscogAlbums";
import { getDiscographyData } from "@/lib/fetch";

export const metadata = {
  title: "Benjamin Campbell | Studio",
  description: "Discography for bassist and composer Benjamin Campbell",
  keywords: [
    "Sydney bass lessons",
    "bass teacher Sydney",
    "upright bass lessons",
    "online bass lessons",
    "electric bass tutor",
    "shire bass lessons",
  ],
  openGraph: {
    title: "Bass Lessons in Sydney | Upright & Electric",
    description:
      "Learn upright or electric bass in-person or online. Lessons tailored to your goals and skill level.",
    url: "https://benjamincampbell.com",
    siteName: "Benjamin Campbell",
    // images: [
    //   {
    //     url: "https://yourdomain.com/images/bass-lessons-og.jpg",`
    //     width: 1200,
    //     height: 630,
    //     alt: "Bass Lessons with Your Name",
    //   },
    // ],
    type: "website",
  },
};

const page = async () => {
  const discographyData = await getDiscographyData();
  console.log("discog", discographyData.albums);
  return (
    <PageWrapper title="studio">
      <DiscogAlbums albums={discographyData.albums} />
    </PageWrapper>
  );
};

export default page;
