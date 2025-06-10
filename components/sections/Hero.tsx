"use client";
import React, { useRef } from "react";
import Badge from "@/components/Badge";
import FadeIn from "../FadeIn";
// import Spinner from "../Spinner";
import {  motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  // const [isLoaded, setIsLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    offset: ["start start", "end start"],
    target: ref,
  });

  const scrollOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const badgeOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  // const y = useTransform(scrollYProgress, [0, 1], [0, 1100]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.7]);

  return (
    <div className="w-full -z-10">
    <FadeIn y={false} random={false}>
      <div ref={ref} className="w-screen h-screen relative ">
        {/* Fixed video background - not affected by scroll transforms */}
        <div className="fixed inset-0 w-screen h-screen -z-20">
          <video
            className="object-cover h-full w-full"
            autoPlay
            muted
            loop
            preload="auto"
            playsInline
            webkit-playsinline="true"
            x5-playsinline="true"
            style={{
              transform: "translate3d(0, 0, 0)",
              backfaceVisibility: "hidden",
            }}
            // onLoadedData={() => {
            //   setIsLoaded(true);
            // }}
          >
            <source
              src="https://res.cloudinary.com/dyb9ascpy/video/upload/v1749101662/welcome_river_lekdjv.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Scroll-based overlay for opacity effect */}
        <motion.div
          className="fixed inset-0 w-screen h-screen bg-background pointer-events-none -z-10"
          style={{
            opacity: useTransform(scrollOpacity, (value) => 1 - value),
            willChange: "opacity",
          }}
        />

        {/* Content layer */}
        <div className="-z-20 fixed h-screen flex items-center justify-center">
          <motion.div
            className="w-screen flex justify-center pb-42"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.3, delay: 0.5 }}
            style={{
              opacity: badgeOpacity,
              // y,
              scale,
              transform: "translate3d(0, 0, 0)",
              willChange: "transform, opacity",
              backfaceVisibility: "hidden",
              WebkitFontSmoothing: "antialiased",
            }}
          >
            <Badge color="text-neutral-100" />
          </motion.div>
        </div>
      </div>
    </FadeIn>
    </div>
  );
};

export default Hero;
