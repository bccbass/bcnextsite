"use client";
import React, {useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const BadgeAnimationWrapper = ({ children }:{children: React.ReactNode}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    offset: ["start start", "end start"],
    target: ref,
  });

  const badgeOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  // const y = useTransform(scrollYProgress, [0, 1], [0, 1100]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.7]);

  return (
    <div ref={ref} className="fixed h-screen top-0 flex items-center justify-center">
      <motion.div
        className="w-screen flex justify-center pb-42"
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // transition={{ duration: 1.3, delay: 0.5 }}
        style={{
          opacity: badgeOpacity,
          scale,
          transform: "translate3d(0, 0, 0)",
          willChange: "transform, opacity",
          backfaceVisibility: "hidden",
          WebkitFontSmoothing: "antialiased",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default BadgeAnimationWrapper;
