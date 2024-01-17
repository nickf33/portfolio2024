"use client";

import Image from "next/image";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export default function WorkLanding({ landingImg }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const sm = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  return (
    <div ref={container} className="img__mask work">
      <motion.div style={{ y: sm }} className="img__wrap work">
        <Image
          src={landingImg.url}
          alt={landingImg.alt}
          width={500}
          height={500}
          priority={true}
          className="main__img work"
        />
      </motion.div>
    </div>
  );
}
