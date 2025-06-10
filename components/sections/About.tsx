"use client";
import React, { useRef } from "react";
// import Link from "next/link";
// import CustomPortableText from "@/components/CustomPortableText";
import { PortableText } from "next-sanity";
import { motion, useTransform, useScroll } from "framer-motion";
import type { PortableTextBlock } from "@sanity/types";

const About = ({
  briefBiography,
}: {
  briefBiography: PortableTextBlock[] | string;
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start center"],
  });

  const opacity = useTransform(scrollYProgress, [.5, 1], [0, 1]);

  return (
    <motion.div
    style={{opacity}}
    ref={ref} className="flex flex-col gap-16 section md:my-12">
      <div className="  flex flex-col md:flex-row gap-6 md:gap-16 lg:gap-20">
        <h2 className="section-title text-center md:text-start">about</h2>

        <div className="flex flex-col items-center">
          <div className="prose prose-lg md:prose-xl pretty text-white">
            {typeof briefBiography !== "string" ? (
              <PortableText value={briefBiography} />
            ) : (
              <div>{briefBiography}</div>
            )}
            {/* <div className="w-full text-xl flex justify-center">
              <Link className="" href={"/about"}>
                read more...
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
