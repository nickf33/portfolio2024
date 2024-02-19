"use client";

import Link from "next/link";
import Button from "@/app/components/ui/Button";
import { AnimatePresence, motion } from "framer-motion";

const ExternalLink = ({ text, link }) => {
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
          exit={{ opacity: 0 }}
          transition={{ type: "tween", duration: 1 }}
          id="hero"
          className="relative items-center w-full min-h-screen pt-[20vh]"
        >
          <div className="w-4/5 mx-auto max-w-custom">
            <h1 className="text-2xl">Hi, I am Nick</h1>
            <div className="w-8 h-[0.2rem] bg-gradient-green my-4" />
            <p className="text-lg font-bebas text-white-dark font-medium my-8 max-w-[22rem]">
              A recent{" "}
              <ExternalLink text="Open University" link="https://open.ac.uk" />{" "}
              graduate with first class honours in web technologies, design and
              development. Take a look at some of my{" "}
              <InternalLink text="work" link="work" /> or view my{" "}
              <InternalLink text="C.V." link="about" />
            </p>

            <Button
              link="contact"
              label="Contact text"
              additionalClass="lgMobile:pt-10 lgMobile:pb-4"
            >
              Contact
            </Button>
            <div className="mt-8 sm-mw">
              <p className="text-white-darker text-[12px] max-w-[12rem] tablet:text-xs">
                Crafted in Figma, powered by Next.js and Sanity CMS. Built with
                with Typescript and Tailwind.
              </p>
            </div>
          </div>
        </motion.header>
      </AnimatePresence>
    </>
  );
}
