"use client";
import React from "react";
import { easeInOut, motion } from "framer-motion";

const FadeIn = ({
  children,
  random,
  once = true,
  y = true,
  i = 0,
}: {
  children: React.ReactNode;
  random: boolean;
  y?: boolean;
  i?: number;
  once?: boolean;
}) => {
  const startY = y ? 5 : 0;
  const delayTime = random ? 0.15 * Math.random() : 0.05 * i;
  return (
    <motion.div
      viewport={{ once: once }}
      key={i}
      initial={{ opacity: 0, y: startY }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: delayTime,
        duration: 0.5,
        ease: easeInOut,
      }}
      className="flex relative"
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
