"use client";

import classNames from "classnames";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Line from "./Line";

interface ButtonProps {
  link: string;
  children: React.ReactNode;
  additionalClass?: string;
  label: string;
}

const Button = ({
  children,
  link,
  additionalClass,
  label,
}: ButtonProps): JSX.Element => {
  const buttonClasses = classNames(
    "relative flex items-center w-full mx-auto tablet:pt-6 tablet:pb-6 lgMobile:pt-8",
    additionalClass
  );
  const router = useRouter();

  return (
    <>
      <div className={buttonClasses}>
        <Line />
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onClick={() => router.push(`/${link}`)}
          dragTransition={{ bounceStiffness: 1000, bounceDamping: 15 }}
          dragElastic={0.1}
          className="link absolute flex justify-center items-center left-[26rem] bg-blue-dark text-sm font-bebas h-20 w-20 rounded-full border border-white-dark tablet:right-0 tablet:left-auto lgMobile:h-20 lgMobile:w-20 hover:bg-white-dark hover:text-green-light"
          aria-label={label}
        >
          {children}
        </motion.div>
      </div>
    </>
  );
};

export default Button;
