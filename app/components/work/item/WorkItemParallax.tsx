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
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const frontImg = useTransform(scrollYProgress, [0, 1], [75, -75]);
  const backImg = useTransform(scrollYProgress, [0, 1], [0, 150]);

  const imgMob = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      ref={container}
      className="flex mt-32 mr-10 w-full tablet:flex-col tablet:gap-20"
    >
      {!isSmallerScreen && (
        <>
          <div className="w-full flex-grow basis-[110%]">
            <motion.div
              style={{ y: frontImg }}
              className="relative top-0 overflow-hidden w-[110%] z-10"
            >
              <Image
                src={imgOne.url}
                alt={imgOne.alt}
                width={1000}
                height={1000}
                className="relative object-cover position-center w-full h-52"
              />
            </motion.div>
          </div>
          <div className="w-full flex-grow basis-[90%]">
            <motion.div
              style={{ y: backImg }}
              className="relative top-0 overflow-hidden w-[110%] left-[-10%] h-44"
            >
              <Image
                src={imgTwo.url}
                alt={imgTwo.alt}
                width={1000}
                height={1000}
                className="relative object-cover position-center w-full"
              />
            </motion.div>
          </div>
        </>
      )}

      {isSmallerScreen && (
        <>
          <div className="w-full overflow-hidden">
            <motion.div
              style={{ y: imgMob }}
              className="h-72 object-cover object-center"
            >
              <Image
                src={imgOne.url}
                alt={imgOne.alt}
                width={1000}
                height={1000}
                className="scroll__img"
              />
            </motion.div>
          </div>
          <div className="w-full overflow-hidden">
            <motion.div
              style={{ y: imgMob }}
              className="h-72 object-cover object-center"
            >
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
    </div>
  );
}
