import React from "react";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Explore from "@/components/sections/Explore";
import Projects from "@/components/sections/Projects";
import Process from "@/components/sections/Process";
import ImageFeature from "@/components/sections/ImageFeature";
import Hello from "@/components/sections/Hello";
import DividerGrunge from "@/components/sections/DividerGrunge";
import DividerStripes from "@/components/sections/DividerStripes";
import DividerSpikes from "@/components/sections/DividerSpikes";
import Footer from "@/components/sections/Footer";
import { getWebsiteData } from "@/lib/fetch";

const page = async () => {
  const websiteData = await getWebsiteData();

  return (
    <div
      // style={{backgroundImage: 'url(/vintage-wallpaper.webp)'}}
      className="flex  flex-col"
    >
      <Hero />
      <About briefBiography={websiteData.briefBiography} />
     <DividerStripes/>
      <Explore />

      {/* <ImageFeature imgUrl="https://res.cloudinary.com/dyb9ascpy/image/upload/v1747204590/WebAssets/t96v0r1hwc6ofzlbdnlj.jpg" /> */}
      <ImageFeature imgUrl="https://res.cloudinary.com/dyb9ascpy/image/upload/v1747714103/WebAssets/assembly_fettzn.webp" />
      <Projects />
      <ImageFeature imgUrl="https://res.cloudinary.com/dyb9ascpy/image/upload/v1747185772/WebAssets/BenAndAngelica_lygs3g.webp" />
      <div className="rotate-180 z-10 -mt-20">
      < DividerGrunge/>

      </div>
      <Process />
      < DividerSpikes/>
      <Hello />
      <Footer />
    </div>
  );
};

export default page;
