"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GoDot, GoDotFill } from "react-icons/go";
import { TemplateProps, ListItem } from "@/types/Template";

const Template = ({ data, category }: TemplateProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const {
    brief,
    endDate,
    listTitle,
    listItems,
    modules,
    modulesListTitle,
    skills,
    skillsListTitle,
    startDate,
    subTitle,
    title,
  } = data;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ stiffness: 10, damping: 12 }}
      className={`relative border-b border-white-dark w-full ${
        category !== "education" ? "pt-6" : ""
      }`}
    >
      <div className="flex justify-between items-center cursor-pointer">
        <div>
          <h2 className="text-lg">{title}</h2>
          <h3 className="text-2xs font-semibold font-mont mt-1">{subTitle}</h3>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-2xs mt-4">{brief}</p>
            <div className="pl-4">
              {renderWorkList(listItems, listTitle)}
              {renderModulesList(modules, modulesListTitle)}
              {renderSkillsList(skills, skillsListTitle)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div
        className="flex justify-between items-start my-6"
        onClick={() => setIsOpen(!isOpen)}
      >
        <AnimatedToggle isOpen={isOpen} />

        <p className="font-bebas text-sm text-right">
          {startDate} - {endDate}
        </p>
      </div>
    </motion.div>
  );
};

const AnimatedToggle = ({ isOpen }: { isOpen: Boolean }) => (
  <div className="link relative w-16 h-4 overflow-hidden text-xs transition">
    <AnimatePresence mode="wait">
      <motion.span
        key={isOpen ? "close" : "open"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 flex items-center justify-start underline transition hover:text-green-light"
      >
        {isOpen ? "Close" : "Open"}
      </motion.span>
    </AnimatePresence>
  </div>
);

const renderModulesList = (
  items: ListItem[] | null | undefined,
  title: string | null | undefined
) => {
  if (!items || !title) return null;

  return (
    <div>
      <ListTitle>{title}</ListTitle>
      <ul>
        {items.map((item) => (
          <li key={item._key} className="my-1">
            <ListWrap key={item._key}>{item.item}</ListWrap>
          </li>
        ))}
      </ul>
    </div>
  );
};

const renderSkillsList = (
  items: ListItem[] | null | undefined,
  title: string | null | undefined
) => {
  if (!items || !title) return null;

  return (
    <div className="flex-col  gap-4">
      <ListTitle>{title}</ListTitle>
      <ul className="grid grid-cols-2 mobile:grid-cols-1">
        {items.map((item) => (
          <li key={item._key} className="my-0.5">
            <ListWrap key={item._key}>{item.item}</ListWrap>
          </li>
        ))}
      </ul>
    </div>
  );
};

const renderWorkList = (
  items: ListItem[] | null | undefined,
  title: string | null | undefined
) => {
  if (!items || !title) return null;

  return (
    <div>
      <ListTitle>{title}</ListTitle>
      <ul>
        {items.map((item) => (
          <li key={item._key} className="font-mont my-2">
            <ListWrap>
              <span className="font-mont font-semibold">{item.itemTitle}</span>
              {item.itemDescription}
            </ListWrap>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ListTitle = ({ children }) => {
  return (
    <>
      <h4 className="text-2xs font-mont font-semibold mt-4 mb-2">{children}</h4>
    </>
  );
};

const ListWrap = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className="flex">
        <div className="mx-1 text-xs inline-block pt-0.5">
          {!isHovered ? <GoDot /> : <GoDotFill className="text-green-light" />}
        </div>
        <p
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="text-2xs pl-2 leading-3"
        >
          {children}
        </p>
      </div>
    </>
  );
};

export default Template;
