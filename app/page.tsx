"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HomeWrap from "./_components/home/HomeWrap";

// Need to work on what the preloader will look like.
// This is a framework which does the trick.
// I dont actually have any solid ideas of what I want the preloader animtion to be yet.

const Preloader = () => (
  <motion.div
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    className="fixed inset-0 z-50 flex items-center justify-center bg-blue-dark text-white"
  ></motion.div>
);

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    if (isFirstRender) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [isFirstRender]);

  useEffect(() => {
    setIsFirstRender(false);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && isFirstRender && <Preloader />}
      </AnimatePresence>
      <HomeWrap />
    </>
  );
};

export default Home;
