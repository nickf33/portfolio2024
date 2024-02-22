import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const ProgressBar = () => {
  const [isNavHidden, setIsNavHidden] = useState(false);
  const { scrollYProgress } = useScroll();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setIsNavHidden(true);
    } else {
      setIsNavHidden(false);
    }
  });

  return (
    <>
      <motion.div
        className="sticky my-4 w-full z-[99999]"
        style={{
          top: isNavHidden ? 0 : 60,
          transition: "top 0.35s",
        }}
      >
        <div className="relative w-full bg-white">
          <div className="absolute top-0 w-8 h-[0.2rem] bg-gradient-green" />
          <motion.div
            className="min-w-8 w-full h-[0.2rem] bg-gradient-green origin-left"
            style={{
              scaleX: scrollYProgress,
              minWidth: "20rem",
              transition: "top 0.35s ease-in-out",
            }}
          />
        </div>
      </motion.div>
    </>
  );
};

export default ProgressBar;
