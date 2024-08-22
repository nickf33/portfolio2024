"use client";

import { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";
import { GoDot } from "react-icons/go";
import { GoDotFill } from "react-icons/go";

interface ListItem {
  _key: string;
  item?: string;
  itemTitle?: string;
  itemDescription?: string;
}

interface TemplateProps {
  data: {
    brief: string;
    endDate: string;
    listTitle?: string;
    listItems?: ListItem[];
    modules?: ListItem[];
    modulesListTitle?: string;
    skills?: ListItem[];
    skillsListTitle?: string;
    order: number;
    startDate: string;
    subTitle: string;
    title: string;
  };
  category: string;
  id: string;
  index: number;
}

const Template = ({ data, category, id, index }: TemplateProps) => {
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
    <>
      <div id={id} className="relative border-b border-white-dark w-full mb-6">
        <h2 className="text-lg">{title}</h2>
        <h3 className="text-2xs font-semibold font-mont mt-1 mb-4">
          {subTitle}
        </h3>
        <p className="text-2xs">{brief}</p>
        <div className="pl-4">
          {renderWorkList(listItems, listTitle)}
          {renderModulesList(modules, modulesListTitle)}
          {renderSkillsList(skills, skillsListTitle)}
        </div>
        <p className="font-bebas text-sm text-right my-6">
          {startDate} - {endDate}
        </p>
      </div>
    </>
  );
};

const renderModulesList = (
  items: ListItem[] | undefined,
  title: string | undefined
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
  items: ListItem[] | undefined,
  title: string | undefined
) => {
  if (!items || !title) return null;

  return (
    <div>
      <ListTitle>{title}</ListTitle>
      <ul className="grid grid-cols-2 tablet:grid-cols-1">
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
  items: ListItem[] | undefined,
  title: string | undefined
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
