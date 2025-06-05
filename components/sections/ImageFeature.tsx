'use client'
// import React from "react";
import { useRef } from "react";
import useMedia from "@/hooks/useMedia"; 
import { motion, useScroll, useTransform } from "framer-motion";


const ImageFeature = ({imgUrl}:{imgUrl: string}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isSmScreen = useMedia("(max-width: 700px)");
const yOuterLimit = isSmScreen ? -47 : -130
  const { scrollYProgress } = useScroll({target: ref,
    offset: ["start center", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, yOuterLimit]);
  // const opacity = useTransform(scrollYProgress, [.5, .9], [1,0]);
  return (
    <motion.div ref={ref} className="w-screen aspect-video md:h-[60vh] flex justify-center overflow-hidden relative">
      <motion.div
        className=" w-screen h-[90vh] md:h-[80vh] flex justify-center items-center saturate-100 filter contrast-150 bg-contain md:bg-cover scale-120 md:scale-100 -translate-y-46 md:translate-y-0"
        style={{
          // opacity,
          y,
          backgroundImage: `url('${imgUrl}')`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          // backgroundSize: "cover",
        }}
      />
    </motion.div>
  );
};

export default ImageFeature;
