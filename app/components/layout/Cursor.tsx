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

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      setMousePosition({
        x: mouseX,
        y: mouseY,
      });
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

  const handleLinkHover = () => {
    const cursor = document.querySelector(".cursor");
    cursor?.classList.add("grow");
  };

  const handleLinkLeave = () => {
    const cursor = document.querySelector(".cursor");
    cursor?.classList.remove("grow");
  };

  useEffect(() => {
    const linkClasses = document.querySelectorAll(".link");

    const linkElements = [...linkClasses];

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

  const handleOutlineHover = () => {
    const cursor = document.querySelector(".cursor");
    cursor?.classList.add("outline");
  };

  const handleOutlineLeave = () => {
    const cursor = document.querySelector(".cursor");
    cursor?.classList.remove("outline");
  };

  useEffect(() => {
    const outlineClasses = document.querySelectorAll(".outline");

    const outlineElements = [...outlineClasses];

    outlineElements.forEach((outlineItem) => {
      outlineItem.addEventListener("mouseenter", handleOutlineHover);
      outlineItem.addEventListener("mouseleave", handleOutlineLeave);
    });

    // Reset cursor state when the page changes
    const resetCursorState = () => {
      const cursor = document.querySelector(".cursor");
      cursor?.classList.remove("grow");
    };

    resetCursorState(); // Reset initially
    window.addEventListener("beforeunload", resetCursorState);

    return () => {
      outlineElements.forEach((outlineItem) => {
        outlineItem.removeEventListener("mouseenter", handleOutlineHover);
        outlineItem.removeEventListener("mouseleave", handleOutlineLeave);
      });

      // Remove the event listener on component unmount
      window.removeEventListener("beforeunload", resetCursorState);
    };
  }, [pathname]);

  return (
    <>
      <motion.div className="cursor tablet:hidden" style={cursorStyle}>
        <div className="cursor__fade"></div>
      </motion.div>
    </>
  );
}
