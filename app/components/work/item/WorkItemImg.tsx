"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export default function WorkItemImg({ img }) {
  const container = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const switchWidth = 767;

  // Resize to handle switch between parallax images
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

  // Parallax Scroll
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const parallax = useTransform(scrollYProgress, [0, 1], [-200, 100]);

  return (
    <div ref={container} className="overflow-hidden h-80 w-full tablet:h-auto">
      {!isMobile ? (
        <motion.div style={{ y: parallax }} className="relative">
          <Image
            src={img.url}
            alt={img.alt}
            width={5000}
            height={5000}
            className=""
            priority={true}
          />
        </motion.div>
      ) : (
        <motion.div className="relative">
          <Image
            src={img.url}
            alt={img.alt}
            width={2000}
            height={2000}
            priority={true}
          />
        </motion.div>
      )}
    </div>
  );
}
