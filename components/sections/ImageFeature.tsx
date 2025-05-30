'use client'
// import React from "react";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";


const ImageFeature = ({imgUrl}:{imgUrl: string}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({target: ref,
    offset: ["start center", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0,-150]);
  // const opacity = useTransform(scrollYProgress, [.5, .9], [1,0]);
  return (
    <motion.div ref={ref} className="w-screen h-[60vh] flex justify-center overflow-hidden inset-shadow-2xl">
      <motion.div
        className="w-screen h-[80vh] flex justify-center items-center saturate-100 filter contrast-150 bg-contain sm:bg-cover"
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
