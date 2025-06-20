import React from "react";
import Biography from "@/components/Biography";
import PageWrapper from "@/components/PageWrapper";
import { getWebsiteData } from "@/lib/fetch";


export const metadata = {
  title: "Benjamin Campbell | About",
  description: "Biography for bassist and composer Benjamin Campbell",
  keywords: ["bass lessons", "bass teacher Sydney", "upright bass lessons", "online bass lessons", "electric bass tutor", "shire bass lessons"],
  openGraph: {
    title: "Bass Lessons in Sydney | Upright & Electric",
    description: "Learn upright or electric bass in-person or online. Lessons tailored to your goals and skill level.",
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
  const websiteData = await getWebsiteData();

  return (
    <PageWrapper title="About">
      <Biography biography={websiteData.biography} />
    </PageWrapper>
  );
};

export default page;
