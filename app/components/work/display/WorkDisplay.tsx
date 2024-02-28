"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FilterButton from "@/app/components/work/display/FilterButton";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function WorkDisplay({ workData }) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filterOptions = [
    { text: "all", category: "all" },
    { text: "design", category: "Design" },
    { text: "dev", category: "Dev" },
  ];

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  /* Handle cursor interaction on filter change */

  useEffect(() => {
    const links = document.querySelectorAll("a.link");
    links.forEach((link) => {
      link.addEventListener("mouseenter", handleLinkHover);
      link.addEventListener("mouseleave", handleLinkLeave);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleLinkHover);
        link.removeEventListener("mouseleave", handleLinkLeave);
      });
    };
  }, [selectedCategory]);

  const handleLinkHover = () => {
    const cursor = document.querySelector(".cursor");
    const dot = document.querySelector(".dot");
    cursor?.classList.add("grow");
    dot?.classList.add("hide");
  };

  const handleLinkLeave = () => {
    const cursor = document.querySelector(".cursor");
    const dot = document.querySelector(".dot");
    cursor?.classList.remove("grow");
    dot?.classList.remove("hide");
  };

  /* Filter Options sort */

  const filteredWorkData =
    selectedCategory === "all"
      ? workData
      : workData.filter((item) =>
          item.category.value.includes(selectedCategory)
        );

  return (
    <>
      {/* Filter buttons */}
      <div className="relative top-0 w-full flex justify-between z-50 py-4 tablet:flex-col">
        <h2 className="text-base tablet:text-2xl">Selected Work Projects</h2>
        <div className="relative flex justify-between tablet:mt-4">
          <div className="relative flex justify-between w-full max-w-[16rem] tablet:ml-auto">
            {filterOptions.map((option, idx) => (
              <FilterButton
                key={idx}
                text={option.text}
                category={option.category}
                selectedCategory={selectedCategory}
                handleCategoryClick={handleCategoryClick}
              />
            ))}
          </div>
        </div>
        <hr className="absolute bottom-0" />
      </div>

      {/* Work Display */}
      <AnimatePresence>
        {filteredWorkData.map((item, idx) => (
          <Link
            href={`/work/${item.slug}`}
            key={item._id}
            className="link group"
          >
            <motion.div
              key={item._id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ delay: idx / 10 }}
              className="relative flex items-center justify-between pl-4 h-32 max-h-[180px] overflow-hidden tablet:flex-col-reverse tablet:max-h-none tablet:h-auto tablet:px-0 tablet:py-8"
            >
              <div className="relative m-0 tablet:w-full">
                <div className="flex items-center">
                  <div className="p-2 rounded-full border mt-[-0.25rem] text-white-dark font-bold mr-2 scale-50 transition duration-300 group-hover:scale-75 group-hover:bg-gradient-green group-hover:text-blue-dark group-hover:border-0 tablet:hidden">
                    <IoIosArrowRoundForward />
                  </div>
                  <h2 className="relative text-xl opacity-60 transition duration-300 origin-left group-hover:scale-150 group-hover:opacity-100 tablet:opacity-100 tablet:group-hover:scale-100 tablet:text-2xl tablet:mb-4">
                    {item.name}
                  </h2>
                </div>

                <div className="overflow-hidden ml-12 tablet:ml-0">
                  <p className="text-2xs translate-y-full group-hover:translate-y-0 transition ease-out duration-300 tablet:translate-y-0 tablet:text-xs">
                    {item.role}
                  </p>
                </div>
              </div>
              <div className="translate-y-full h-full overflow-hidden transition ease-out duration-300 group-hover:translate-y-0 tablet:translate-y-0 tablet:w-full tablet:h-72">
                <Image
                  className="relative object-cover h-36 w-48 transition duration-300 tablet:w-full tablet:h-64 tablet:hover:scale-105"
                  src={item.landingImg.url}
                  alt={item.landingImg.alt}
                  width={3000}
                  height={3000}
                />
              </div>
            </motion.div>
            <hr />
          </Link>
        ))}
      </AnimatePresence>
    </>
  );
}
