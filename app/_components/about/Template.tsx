"use client";

import { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";

interface AboutItemProps {
  data: {
    brief: string;
    endDate: string;
    listTitle?: string;
    listItems?: string[];
    modulesListItems?: string[];
    modulesListTitle?: string;
    skillsListItems?: string[];
    skillsListTitle?: string;
    order: number;
    startDate: string;
    subTitle: string;
    title: string;
  };
}

interface ListItem {
  item: string;
  _key: string;
}

const Template = ({ data, category, index }) => {
  const {
    brief,
    endDate,
    listTitle,
    listItems,
    modulesListItems,
    modulesListTitle,
    skillsListItems,
    skillsListTitle,
    order,
    startDate,
    subTitle,
    title,
  } = data;

  console.log(data);

  return (
    <>
      <div className="border-2 w-full">
        <h2 className="text-lg">{title}</h2>
        <h3 className="text-2xs font-semibold font-mont mt-1 mb-4">
          {subTitle}
        </h3>
        <p className="text-2xs">{brief}</p>
        {renderList(listItems, listTitle)}
        {renderList(modulesListItems, modulesListTitle)}
        {renderList(skillsListItems, skillsListTitle)}
      </div>
    </>
  );
};

const renderList = (
  items: ListItem[] | undefined,
  title: string | undefined
) => {
  if (!items || !title) return null;

  return (
    <div>
      <h4>{title}</h4>
      <ul>
        {items.map((item) => (
          <li key={item._key}>{item.item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Template;
