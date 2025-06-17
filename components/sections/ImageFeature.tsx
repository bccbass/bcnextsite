"use client";
import { useRef } from "react";
import useMedia from "@/hooks/useMedia";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const ImageFeature = ({ imgUrl }: { imgUrl: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isSmScreen = useMedia("(max-width: 700px)");
  const yOuterLimit = isSmScreen ? -47 : -130;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, yOuterLimit]);

  return (
    <div
      ref={ref}
      className="w-screen aspect-video md:h-[60vh] flex justify-center overflow-hidden relative"
    >
      <motion.div
        className="w-screen h-[90vh] md:h-[80vh] flex justify-center items-center relative scale-120 md:scale-100 -translate-y-46 md:translate-y-0"
        style={{
          y,
          transform: "translate3d(0, 0, 0)",
          willChange: "transform",
          backfaceVisibility: "hidden",
        }}
        transition={{
          type: "tween",
          ease: "linear", // Linear easing often performs better in Safari
          duration: 0, // Let scroll drive the animation completely
        }}
      >
        <Image
          src={imgUrl}
          width={1280}
          height={980}
          alt="parallax image feature for homepage - bc plays bass"
          className={`
            w-full h-full object-center saturate-100 filter contrast-150
            ${isSmScreen ? "object-contain" : "object-cover"}
          `}
          style={{
            // Ensure hardware acceleration for the image
            transform: "translate3d(0, 0, 0)",
            backfaceVisibility: "hidden",
          }}
        />
      </motion.div>
    </div>
  );
};

export default ImageFeature;
