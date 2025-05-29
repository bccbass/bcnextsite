"use client";
import React from "react";
import { easeInOut, motion, AnimatePresence } from "framer-motion";

const FadeInOut = ({ children }: { children: React.ReactNode }) => {
  return (
    <AnimatePresence initial={false}>
      <motion.div
        className="w-full"
        layout
        //   viewport={{ once: once }}
        initial={{ opacity: 0 }}
        // whileInView={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ x: 300 }}
        transition={{
          duration: 0.5,
          ease: easeInOut,
        }}
      >
        
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default FadeInOut;
