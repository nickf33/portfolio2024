"use client";

import classNames from "classnames";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  fontSize?: string;
  additionalClass?: string;
  hideLine?: boolean;
}

export default function Button({
  href,
  children,
  fontSize,
  additionalClass,
  hideLine = false,
}: ButtonProps): JSX.Element {
  const buttonFont = classNames("link__btn link", fontSize);
  const buttonClasses = classNames("btn__wrap", additionalClass);
  const router = useRouter();
  return (
    <div className={buttonClasses}>
      {hideLine ? null : <div className="btn__line"></div>}
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onClick={() => router.push(href)}
        transition={{ type: "spring", stiffness: 1000, damping: 25, mass: 1 }}
        className="drag__wrap"
      >
        <button className={buttonFont}>{children}</button>
      </motion.div>
    </div>
  );
}
