"use client";
import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
  },
};

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    y: [0, -30],
    transition: {
      repeatType: "mirror" as const,
      repeat: Infinity,
      stiffness: 100,
    },
  },
};

const Loader = () => {
  return (
    <>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex w-12 justify-between"
      >
        <motion.div
          variants={variants}
          animate="show"
          className="h-4 w-4 bg-white-dark rounded-full"
          transition={{ delay: 0 }}
        />
        <motion.div
          variants={variants}
          animate="show"
          className="h-4 w-4 bg-white-dark rounded-full"
          transition={{ delay: 0.2 }}
        />
        <motion.div
          variants={variants}
          animate="show"
          className="h-4 w-4 bg-white-dark rounded-full"
          transition={{ delay: 0.4 }}
        />
      </motion.div>
    </>
  );
};

export default Loader;
