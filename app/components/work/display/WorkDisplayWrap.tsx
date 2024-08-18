"use client";
import WorkDisplay from "./WorkDisplay";
import { motion, AnimatePresence } from "framer-motion";
import ProgressBar from "../../ui/ProgressBar";

const WorkWrap = ({ workData }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ type: "tween", duration: 1 }}
        id="works"
        className="relative items-center w-full min-h-screen pt-[20vh] pb-32"
      >
        <div className="w-4/5 mx-auto max-w-custom">
          <h1 className="text-2xl">My Work</h1>
          <div className="w-8 h-[0.2rem] bg-gradient-green my-4" />
          <p className="text-2xs text-white-dark font-medium my-8 max-w-[26rem] tablet:text-xs">
            Here’s a selection of my work, ranging from practical projects to
            creative experiments. Each one reflects my approach to design and
            development, focused on solving problems and exploring new ideas.
          </p>
          <WorkDisplay workData={workData} />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default WorkWrap;
