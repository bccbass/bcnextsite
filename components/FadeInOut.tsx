"use client";
import React from "react";
import { easeInOut, motion } from "framer-motion";

const FadeInOut = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <motion.div
    //   viewport={{ once: once }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1}}
      transition={{
        duration: 0.2,
        ease: easeInOut,
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInOut;
