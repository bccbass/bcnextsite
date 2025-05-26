"use client";
import React from "react";
import { urlForMedImg } from "../lib/sanityImage";
import Image from "next/image";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { motion, useScroll } from "framer-motion";
// import useMedia from "@/hooks/useMedia";

type ProjectProps = {
  mainImage: {
    alt: string;
    asset: SanityImageSource;
  };
  title: string;
  description: string;
};
const ProjectExpo = ({ mainImage, title, description }: ProjectProps) => {
  // const isMedium = useMedia("(max-width: 768px)");

  const { scrollYProgress } = useScroll({
    offset: ["start start", "end center"],
  });

  // const scrollOpacity = useTransform(scrollYProgress, [0.01, 0.08], [1, 0]);

  return (
    <div
      key={"project-expo"}
      className="flex mb-2 w-full flex-col md:flex-row items-center justify-center"
    >
      {/* Image */}
      <motion.figure
        className="w-full md:w-1/2 max-w-lg "
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        transition={{
          once: true,
          duration: 0.5,
          ease: "easeInOut",
        }}
      >


        <Image
          className="w-full p-0.5 outline-neutral-400 outline-1"
          alt={mainImage.alt ? mainImage.alt : title}
          width={800}
          height={800}
          src={`${urlForMedImg(mainImage)}`}
        />
        <figcaption className="hidden md:block w-full text-center mt-1 text-sm">{mainImage.alt ? mainImage.alt : ''}</figcaption>
      </motion.figure>

      {/* Title and Description */}
      <motion.div
        className="w-full md:w-1/2 h-full"
        initial={{ opacity: 0, y: 1 }}
        whileInView={{ opacity: 1, y: 0}}
        transition={{
          once: true,
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        <div className="relative z-50 flex w-full items-start h-full justify-center py-8  md:items-center">
          <div className="mx-8 flex w-full max-w-xl flex-col items-center justify-center border-t border-b border-neutral-400 py-4 text-center md:my-10 lg:mx-20 lg:py-8">
            <h3 className="text-center text-3xl text-neutral-700 md:text-4xl lg:text-5xl">
              {title}
            </h3>
            <p className="block w-full px-2 pt-5 text-xl leading-9 font-light text-neutral-400 italic md:text-2xl">
              {description}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectExpo;
