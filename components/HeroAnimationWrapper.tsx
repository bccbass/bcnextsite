"use client";
import React, { useRef } from "react";
// import Badge from "@/components/Badge";
// import FadeIn from "./FadeIn";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroAnimationWrapper = () => {
  const ref = useRef<HTMLDivElement>(null);
  // const [isLoaded, setIsLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    offset: ["start end", "start start"],
    target: ref,
  });

  const scrollOpacity = useTransform(scrollYProgress, [0, .4], [1, 0]);


  return (
    <>
    <div className="w-full h-screen flex items-end">
    <div ref={ref}/>
    </div>
    <motion.div
      className="fixed inset-0 w-screen h-screen bg-background pointer-events-none -z-10"
      style={{
        opacity: useTransform(scrollOpacity, (value) => 1 - value),
        willChange: "opacity",
      }}
    />
    </>
  );
};

export default HeroAnimationWrapper;
