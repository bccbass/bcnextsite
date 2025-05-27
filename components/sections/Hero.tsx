"use client";
import React, { useRef } from "react";
import Badge from "@/components/Badge";
import NavHamburger from "../NavHamburger";

import { motion, useScroll, useTransform } from "framer-motion";
// import welcomeRiver from '/welcome_river.mp4'

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end start"],
    target: ref,
  });
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 550]);
  return (
    <>
      <NavHamburger />
      <motion.div
        style={{ opacity: scrollOpacity }}
        ref={ref}
        className="w-screen flex  h-screen top-0  -z-10"
      >
        <motion.div
          className="w-screen  top-5 left-8 absolute"
          style={{
            y,
          }}
        >
          <Badge color="text-neutral-100" />
        </motion.div>

        <video
          className="object-cover h-screen w-screen"
          poster="/waterfall.webp"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/welcome_river.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
    </>
  );
};

export default Hero;
