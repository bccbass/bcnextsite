import React from "react";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Explore from "@/components/sections/Explore";
import Projects from "@/components/sections/Projects";
// import Process from "@/components/sections/Process";
// import DividerGrunge from "@/components/sections/DividerGrunge";
import ProcessWIP from "@/components/sections/ProcessWIP";
import ImageFeature from "@/components/sections/ImageFeature";
import Hello from "@/components/sections/Hello";
import NavHamburger from "@/components/NavHamburger";
import Footer from "@/components/sections/Footer";
import { getWebsiteData } from "@/lib/fetch";


export const metadata = {
  title: "Benjamin Campbell | Bassist | Composer | Educator",
  description: "Learn upright or electric bass in-person or online with an experienced session bassist and educator. Book your first lesson today.",
  keywords: ["bass lessons", "bass teacher Sydney", "upright bass lessons", "online bass lessons", "electric bass tutor", "shire bass lessons"],
  openGraph: {
    title: "Bass Lessons in Sydney | Upright & Electric",
    description: "Learn upright or electric bass in-person or online. Lessons tailored to your goals and skill level.",
    url: "https://benjamincampbell.com",
    siteName: "Benjamin Campbell",
    images: [
      {
        url: 'https://benjamincampbell.com/welcome_poster.webp',
        width: 1200,
        height: 630,
        alt: "Welcome waterfall",
      },
    ],
    type: "website",
  },
};


const page = async () => {
  const websiteData = await getWebsiteData();

  return (
    <div className="flex flex-col">
      <NavHamburger homePage={true} />
      <Hero />
      <About briefBiography={websiteData.briefBiography} />
      <Explore />
      {/* < DividerGrunge topColor="background" bottomColor="secondary" /> */}
      <ImageFeature imgUrl="https://res.cloudinary.com/dyb9ascpy/image/upload/v1747714103/WebAssets/assembly_fettzn.webp" />
      <Projects />
      <ImageFeature imgUrl="https://res.cloudinary.com/dyb9ascpy/image/upload/v1747185772/WebAssets/BenAndAngelica_lygs3g.webp" />
      {/* <div className="rotate-180">
        <DividerGrunge topColor="background" bottomColor="secondary" />
      </div> */}
      <ProcessWIP />
      {/* <Process /> */}
      {/* <div className="rotate-180 -mt-12">
      < DividerGrunge topColor="secondary" bottomColor="secondary/0" />
</div> */}
      <Hello />
      <Footer />
    </div>
  );
};

export default page;
