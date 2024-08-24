"use client";

import React from "react";
import classNames from "classnames";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface ButtonProps {
  link: string;
  children: React.ReactNode;
  additionalClass?: string;
  label: string;
  delay?: number;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const Button = ({
  children,
  link,
  additionalClass,
  label,
  delay = 0,
}: ButtonProps): JSX.Element => {
  const buttonClasses = classNames(
    "relative flex items-center w-full mx-auto",
    additionalClass
  );
  const router = useRouter();

  const isExternal = link.startsWith("http://") || link.startsWith("https://");

  const handleClick = async (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (isExternal) {
      window.open(link, "_blank", "noopener,noreferrer");
    } else {
      const body = document.querySelector("body");
      body?.classList.add("page-transition");

      await sleep(500);
      router.push(link.startsWith("/") ? link : `/${link}`);
      await sleep(500);

      body?.classList.remove("page-transition");
    }
  };

  return (
    <div className={buttonClasses}>
      <motion.hr
        initial={{ width: "0%" }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: delay, duration: 0.6 }}
        className="border-white-dark"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: delay + 0.2, duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onClick={handleClick}
        dragTransition={{ bounceStiffness: 1000, bounceDamping: 15 }}
        dragElastic={0.1}
        className="link absolute flex justify-center items-center left-[26rem] bg-blue-dark h-20 w-20 rounded-full border border-white-dark tablet:right-0 tablet:left-auto lgMobile:h-10 lgMobile:w-20 hover:bg-white-dark hover:text-green-light"
        aria-label={label}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Button;
