"use client";

import { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";

const Template = ({ data, category, index }) => {
  const [isOpen, setIsOpen] = useState(
    category === "education" || category === "interests" ? true : false
  );

  const accordionToggle = () => {
    setIsOpen(!isOpen);
  };

  const {
    brief,
    endDate,
    listItems,
    listTitle,
    order,
    startDate,
    subTitle,
    title,
  } = data;

  return (
    <motion.div
      className="relative flex mt-8 tablet:flex-col tablet:mt-4"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ stiffness: 100 }}
    >
      <div className="flex justify-end w-32 tablet:w-full tablet:justify-start">
        <h2
          className={`text-lg text-right tablet:text-xl tablet:mb-4 bg-gradient-green text-transparent bg-clip-text inline-block
            ${index >= 1 ? "hidden" : ""}
            `}
        >
          {category}
          <span className="mx-2 tablet:hidden">•</span>
        </h2>
      </div>
      {/* Details Start */}
      <div className="relative w-full group">
        <div className="" onClick={accordionToggle}>
          <h2 className="text-lg tablet:text-xl">{title}</h2>
          <h3 className="font-mont text-xs my-1 tablet:text-base">
            {subTitle}
          </h3>
          <p className="text-2xs font-semibold ml-auto">
            {startDate}{" "}
            <span className={startDate ? "mx-1" : "hidden"}> ━ </span> {endDate}
          </p>
          <p className="text-2xs mt-2 text-white-dark hover:bg-gradient-green underline hover:text-transparent hover:bg-clip-text inline-block">
            {!isOpen ? "Open Details" : "Close Details"}
          </p>

          <div className="link absolute top-2 right-4 p-2 grid place-content-center rounded-full border mt-[-0.25rem] w-4 h-4 text-xs text-white-dark font-bold mr-2 rotate-[180deg] transition duration-300 group-hover:scale-150 group-hover:rotate-[140deg] group-hover:bg-gradient-green group-hover:text-blue-dark">
            <IoIosArrowRoundForward />
          </div>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 origin-top ${
            isOpen ? "h-auto opacity-100" : "h-0 opacity-0"
          }`}
        >
          <p className="text-2xs mt-4 tablet:text-xs">{brief}</p>

          {/* List Start */}
          <p className="text-2xs font-bold mt-4 tablet:text-xs">{listTitle}</p>

          <ul className="w-full my-4 pl-2">
            {listItems && listItems.length > 0 && (
              <>
                {listItems.map((listItem: any, i: number) => (
                  <li
                    key={i}
                    className="text-2xs ml-2 my-2 before:content-['○'] before:mr-2 tablet:text-xs"
                  >
                    {listItem.item}
                  </li>
                ))}
              </>
            )}
          </ul>
        </div>
        <hr
          className={`mt-8 w-full border-white-darker ${
            category === "Interests" ? "hidden" : ""
          }`}
        />
      </div>
    </motion.div>
  );
};

export default Template;
