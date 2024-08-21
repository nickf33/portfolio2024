"use client";

import { motion } from "framer-motion";
import Button from "@/app/_components/ui/Button";

const NotFound = () => {
  return (
    <motion.div
      key="content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: "tween", duration: 1 }}
      id="about"
      className="relative items-center w-full min-h-screen pt-[20vh] pb-32"
    >
      <div className="w-4/5 mx-auto max-w-custom">
        <h1 className="text-2xl">404</h1>
        <div className="w-8 h-[0.2rem] bg-gradient-green my-4" />
        <p className="text-2xs text-white-dark font-medium my-8 max-w-[26rem] tablet:text-xs">
          You seem to be a little lost.
        </p>

        <h2 className="text-base tablet:text-2xl">Head on home</h2>

        <Button
          link="/"
          additionalClass="my-4 tablet:pt-0 lgMobile:pt-0"
          label="Download Icon"
        >
          HOME
        </Button>
      </div>
    </motion.div>
  );
};

export default NotFound;
