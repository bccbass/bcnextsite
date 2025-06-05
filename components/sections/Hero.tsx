"use client";
import React, { useRef, useState } from "react";
import Badge from "@/components/Badge";
import FadeIn from "../FadeIn";
import Spinner from "../Spinner";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end start"],
    target: ref,
  });
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const badgeOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 450]);
  return (
    <FadeIn y={false} random={false}>
      <motion.div
        style={{ opacity: scrollOpacity }}
        ref={ref}
        className="w-screen flex  h-screen top-0  -z-10 relative"
      >
        {!isLoaded ? (
          <div className="h-screen absolute col-centered w-screen">
            <Spinner />
          </div>
        ) : (
          <motion.div
            className="w-screen top-1/4 flex justify-center absolute"
            style={{
              opacity: badgeOpacity,
              y,
            }}
          >
            <Badge color="text-neutral-100" />
          </motion.div>
        )}
        <video
          className="object-cover h-screen w-screen"
          // poster="/waterfall.webp"
          autoPlay
          muted
          loop
          preload="auto"
          playsInline
          onLoadedData={() => {
            console.log("Loaded ->", isLoaded);
            setIsLoaded(true);
          }}
        >
          <source src="/welcome_river.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
    </FadeIn>
  );
};

export default Hero;
