"use client";

import Image from "next/image";
import Link from "next/link";
import { TransitionLink } from "../../ui/TransitionLink";
import logo from "@/images/logo/nfio_logo.svg";
import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import MagneticWrap from "../../ui/MagneticWrap";

const links = [
  { linkText: "about", url: "about" },
  { linkText: "projects", url: "projects" },
  { linkText: "contact", url: "contact" },
];

const NavLink = ({ linkText, url }) => {
  return (
    <>
      <MagneticWrap>
        <TransitionLink href={`/${url}`}>
          <p className="link text-2xs font-medium hover:text-green-light">
            {linkText}
          </p>
        </TransitionLink>
      </MagneticWrap>
    </>
  );
};

export default function DesktopNav() {
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: -100 },
        }}
        animate={isHidden ? "hidden" : "visible"}
        transition={{ duration: 0.35 }}
        id="navbar"
        className={`fixed top-0 h-[80px] w-full py-4 px-0 z-[100] ${
          isScrolled ? "backdrop-blur-2xl" : ""
        }`}
      >
        <div className="link flex justify-between items-center w-4/5 mx-auto my-0 max-w-custom">
          <TransitionLink href="/">
            <Image
              src={logo}
              alt="logo"
              width={200}
              height={200}
              className="h-auto w-12 min-w-[70px]"
              priority
            />
          </TransitionLink>
          <div className="flex w-40 justify-between items-center">
            {links.map((link, index) => (
              <NavLink key={index} linkText={link.linkText} url={link.url} />
            ))}
          </div>
        </div>
      </motion.nav>
    </>
  );
}
