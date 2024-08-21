"use client";

import React, { useState, useEffect } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

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

  return <>{isMobile ? <MobileNav /> : <DesktopNav />}</>;
}
