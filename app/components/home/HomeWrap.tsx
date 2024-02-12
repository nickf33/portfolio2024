"use client";

import Link from "next/link";
import Button from "@/app/components/ui/Button";
import { AnimatePresence, motion } from "framer-motion";

const UniLink = () => {
  return (
    <Link
      target="_blank"
      href="https://www.open.ac.uk/"
      className="bg-gradient-to-br from-blue-light to-green-light text-transparent bg-clip-text inline-block"
      rel="noopener noreferrer"
    >
      Open University
    </Link>
  );
};

const InternalLink = ({ text, link }) => {
  return (
    <Link
      href={`/${link}`}
      className="bg-gradient-to-br from-red-light to-red-dark  text-transparent bg-clip-text inline-block"
    >
      {text}
    </Link>
  );
};

export default function HomeWrap() {
  return (
    <>
      <AnimatePresence mode="wait">
        <header id="hero" className="flex items-center w-full h-screen">
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "tween", duration: 1 }}
            className="w-4/5 mx-auto max-w-custom"
          >
            <div className="flex flex-col my-8 max-w-[27rem] tablet:max-w-[100vw] lgMobile:max-w-[24rem]">
              <h1 className="text-xl tablet:text-2xl">
                Hi, I am Nick. a recent <UniLink /> graduate with first class
                honours in web technologies, design and development. {<br />}
                Take a look at some <InternalLink text="work" link="work" /> or
                view my <InternalLink text="résumé" link="about" />
                &nbsp;.
              </h1>
            </div>

            <Button link="contact" label="Contact text">
              Contact
            </Button>

            <div className="text__wrap mt-8 sm-mw">
              <p className="text-white-darker text-2xs max-w-[12rem] tablet:text-xs">
                Crafted in Figma, powered by Next.js and Sanity CMS. Built with
                with Typescript and Tailwind.
              </p>
            </div>
          </motion.div>
        </header>
      </AnimatePresence>
    </>
  );
}
