"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
  const pathname = usePathname();
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [dotPosition, setDotPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      setMousePosition({
        x: mouseX,
        y: mouseY,
      });

      setTimeout(() => {
        setDotPosition({
          x: mouseX,
          y: mouseY,
        });
      }, 50);
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const cursorStyle = {
    top: `${mousePosition.y}px`,
    left: `${mousePosition.x}px`,
  };

  const dotStyle = {
    top: `${dotPosition.y}px`,
    left: `${dotPosition.x}px`,
  };

  const handleLinkHover = () => {
    const cursor = document.querySelector(".cursor");
    cursor?.classList.add("grow");
  };

  const handleLinkLeave = () => {
    const cursor = document.querySelector(".cursor");
    cursor?.classList.remove("grow");
  };

  useEffect(() => {
    const links = document.querySelectorAll("a");
    const linkClasses = document.querySelectorAll(".link");

    const linkElements = [...links, ...linkClasses];

    linkElements.forEach((linkItem) => {
      linkItem.addEventListener("mouseenter", handleLinkHover);
      linkItem.addEventListener("mouseleave", handleLinkLeave);
    });

    // Reset cursor state when the page changes
    const resetCursorState = () => {
      const cursor = document.querySelector(".cursor");
      cursor?.classList.remove("grow");
    };

    resetCursorState(); // Reset initially
    // Add an event listener to reset cursor state on page change
    window.addEventListener("beforeunload", resetCursorState);

    return () => {
      linkElements.forEach((linkItem) => {
        linkItem.removeEventListener("mouseenter", handleLinkHover);
        linkItem.removeEventListener("mouseleave", handleLinkLeave);
      });

      // Remove the event listener on component unmount
      window.removeEventListener("beforeunload", resetCursorState);
    };
  }, [pathname]);

  // Check if it's a touch device
  const isTouchDevice =
    typeof window !== "undefined" &&
    ("ontouchstart" in window || navigator.maxTouchPoints);

  return (
    <>
      {/* Render cursor only if it's not a touch device */}
      {!isTouchDevice && (
        <motion.div className="cursor tablet:hidden" style={cursorStyle}>
          <div className="cursor__fade"></div>
        </motion.div>
      )}
    </>
  );
}
