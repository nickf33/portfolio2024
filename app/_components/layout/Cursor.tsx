"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
  const pathname = usePathname();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  const handleLinkHover = useCallback(() => {
    setCursorVariant("grow");
  }, []);

  const handleLinkLeave = useCallback(() => {
    setCursorVariant("default");
  }, []);

  const setupLinkListeners = useCallback(() => {
    const linkElements = document.querySelectorAll(".link");
    linkElements.forEach((linkItem) => {
      linkItem.addEventListener("mouseenter", handleLinkHover);
      linkItem.addEventListener("mouseleave", handleLinkLeave);
    });
  }, [handleLinkHover, handleLinkLeave]);

  const removeLinkListeners = useCallback(() => {
    const linkElements = document.querySelectorAll(".link");
    linkElements.forEach((linkItem) => {
      linkItem.removeEventListener("mouseenter", handleLinkHover);
      linkItem.removeEventListener("mouseleave", handleLinkLeave);
    });
  }, [handleLinkHover, handleLinkLeave]);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    setupLinkListeners();

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
          removeLinkListeners();
          setupLinkListeners();
        }
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      removeLinkListeners();
      observer.disconnect();
    };
  }, [handleMouseMove, setupLinkListeners, removeLinkListeners]);

  useEffect(() => {
    setCursorVariant("default");
    removeLinkListeners();
    setupLinkListeners();
  }, [pathname, removeLinkListeners, setupLinkListeners]);

  const variants = {
    default: {
      width: "10px",
      height: "10px",
      backgroundColor: "transparent",
    },
    grow: {
      width: "2rem",
      height: "2rem",
      backgroundColor: "var(--cursor-color)",
    },
  };

  return (
    <motion.div
      className={`cursor tablet:hidden`}
      variants={variants}
      animate={cursorVariant}
      style={{
        left: `${mousePosition.x}px`,
        top: `${mousePosition.y}px`,
      }}
    >
      <div className={`dot ${cursorVariant === "grow" ? "hide" : ""}`}></div>
      <div className="cursor__fade"></div>
    </motion.div>
  );
}
