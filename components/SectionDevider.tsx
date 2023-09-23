"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionDevider() {
  return (
    <motion.div
      className="bg-gray-300 dark:bg-white/50 h-16 w-1 
      rounded-full my-24 hidden sm:block"
      initial={{
        opacity: 0,
        y: 100,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.2,
      }}
    ></motion.div>
  );
}
