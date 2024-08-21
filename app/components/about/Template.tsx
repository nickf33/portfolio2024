"use client";

import { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";

const Template = ({ data, category, index }) => {
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
    <>
      <div className="border-2 w-full h-40">
        <h2 className="">{}</h2>
      </div>
    </>
  );
};

export default Template;
