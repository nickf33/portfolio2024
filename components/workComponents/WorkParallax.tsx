"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export default function WorkParallax({ parallaxImgs }) {
  const imgOne = parallaxImgs[0];
  const imgTwo = parallaxImgs[1];
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const [isSmallerScreen, setIsSmallerScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallerScreen(window.innerWidth < 767);
    };

    // Initial check
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const sm = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const md = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <div ref={container} className="parallax__wrap">
      {!isSmallerScreen && (
        <>
          <div className="parallax__track track__one">
            <motion.div style={{ y: sm }} className="img__mask mask__one">
              <Image
                src={imgOne.url}
                alt={imgOne.alt}
                width={1000}
                height={1000}
                className="scroll__img"
              />
            </motion.div>
          </div>
          <div className="parallax__track track__two">
            <motion.div style={{ y: md }} className="img__mask mask__two">
              <Image
                src={imgTwo.url}
                alt={imgTwo.alt}
                width={1000}
                height={1000}
                className="scroll__img"
              />
            </motion.div>
          </div>
        </>
      )}

      {isSmallerScreen && (
        <>
          <div className="parallax__track track__one">
            <div className="img__mask mask__one">
              <Image
                src={imgOne.url}
                alt={imgOne.alt}
                width={1000}
                height={1000}
                className="scroll__img"
              />
            </div>
          </div>
          <div className="parallax__track track__two">
            <div className="img__mask mask__two">
              <Image
                src={imgTwo.url}
                alt={imgTwo.alt}
                width={1000}
                height={1000}
                className="scroll__img"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
