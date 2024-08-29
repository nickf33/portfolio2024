"use client";

import Link from "next/link";
import Button from "@/app/_components/ui/Button";
import { AnimatePresence, motion } from "framer-motion";
import SplitText from "../ui/SplitText";

const ExternalLink = ({ text, link }: { text: string; link: string }) => {
  return (
    <Link
      target="_blank"
      href={link}
      className="link bg-gradient-blue text-transparent bg-clip-text inline-block"
      rel="noopener noreferrer"
    >
      {text}
    </Link>
  );
};

const InternalLink = ({ text, link }: { text: string; link: string }) => {
  return (
    <Link
      href={`/${link}`}
      className="link bg-gradient-green text-transparent bg-clip-text inline-block"
    >
      {text}
    </Link>
  );
};

export default function HomeWrap() {
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.header
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "tween", duration: 1 }}
          id="hero"
          className="relative flex items-center justify-center w-full min-h-screen"
        >
          <div className="w-4/5 mx-auto max-w-custom">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, stiffness: 10 }}
              className="text-2xl"
            >
              Hi, I am Nick
            </motion.h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ delay: 0.6, stiffness: 10 }}
              className="h-[0.2rem] bg-gradient-green my-4"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, stiffness: 10 }}
              className="relative text-lg font-bebas max-w-[24rem] text-white-dark font-medium  leading-tight my-8"
            >
              Specialising in web technologies, design and development with a
              first-class degree from the Open University. Experienced in
              creating efficient, user-friendly digital solutions.
            </motion.p>

            <Button
              link="contact"
              label="Contact text"
              additionalClass="lgMobile:pt-10 lgMobile:pb-4"
              delay={1}
            >
              Contact
            </Button>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="mt-12 sm-mw"
            >
              <p className="text-white-dark text-[12px] max-w-[12rem] tablet:text-xs">
                Crafted in Figma, powered by Next.js and Sanity CMS. Built with
                Typescript and Tailwind.
              </p>
            </motion.div>
          </div>
        </motion.header>
      </AnimatePresence>
    </>
  );
}
