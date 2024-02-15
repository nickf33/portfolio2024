"use client";

import React, { useState, useEffect } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function NavigationWrap() {
  const [isMobile, setIsMobile] = useState(false);
  const switchWidth = 767;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= switchWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [switchWidth]);

  // const [isHidden, setIsHidden] = useState(false);
  // const { scrollY } = useScroll();

  // // useEffect(() => {
  // //   const unsub = scrollY.on("change", (latest) => console.log(latest));
  // //   return () => unsub();
  // // }, [scrollY]);

  // useMotionValueEvent(scrollY, "change", (latest) => {
  //   const previous = scrollY.getPrevious();
  //   if (latest > previous && latest > 150) {
  //     setIsHidden(true);
  //   } else {
  //     setIsHidden(false);
  //   }
  // });

  return <>{isMobile ? <MobileNav /> : <DesktopNav />}</>;
}
