"use client";
import WorkDisplay from "./display/WorkDisplay";
import { motion, AnimatePresence } from "framer-motion";

const WorkWrap = ({ workData }) => {
  return (
    <AnimatePresence>
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
          <div className="w-8 h-[0.2rem] bg-gradient-to-br from-green-light to-blue-light my-4"></div>
          <p className="text-2xs text-white-dark font-medium my-8 max-w-[26rem] tablet:text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, sint
            facilis soluta quia nemo explicabo in aut ab fuga. Vero beatae neque
            sit saepe alias veritatis, repellendus ipsa corporis optio.
          </p>
          <WorkDisplay workData={workData} />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default WorkWrap;
