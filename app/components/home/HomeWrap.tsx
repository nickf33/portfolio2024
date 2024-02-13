"use client";

import Link from "next/link";
import Button from "@/app/components/ui/Button";
import { AnimatePresence, motion } from "framer-motion";

const ExternalLink = ({ text, link }) => {
  return (
    <Link
      target="_blank"
      href={link}
      className="bg-gradient-red text-transparent bg-clip-text inline-block shadow-lg"
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
      className="bg-gradient-green text-transparent bg-clip-text inline-block shadow-xl"
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
                Hi, I am Nick. a recent{" "}
                <ExternalLink
                  text="Open University"
                  link="https://open.ac.uk"
                />{" "}
                graduate with first class honours in web technologies, design
                and development. {<br />}
                Take a look at some <InternalLink text="work" link="work" /> or
                view my <InternalLink text="C.V" link="about" />.
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
