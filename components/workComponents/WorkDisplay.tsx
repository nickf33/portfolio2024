"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WorkDisplay({ workData }) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredWorkData =
    selectedCategory === "all"
      ? workData
      : workData.filter((item) => {
          return item.category.value.includes(selectedCategory);
        });

  return (
    <>
      <div className="work__header-wrap">
        <h2 className="subheading">Selected Work Projects</h2>
        <div className="filter__wrap">
          <button
            className={`filter__button link ${
              selectedCategory === "all" ? "current" : ""
            }`}
            onClick={() => handleCategoryClick("all")}
          >
            All
          </button>
          <button
            className={`filter__button link ${
              selectedCategory === "Design" ? "current" : ""
            }`}
            onClick={() => handleCategoryClick("Design")}
          >
            Design
          </button>
          <button
            className={`filter__button link ${
              selectedCategory === "Development" ? "current" : ""
            }`}
            onClick={() => handleCategoryClick("Development")}
          >
            Dev
          </button>
        </div>
      </div>

      {filteredWorkData.map((item, idx) => (
        <Link
          href={`/work/${item.slug}`}
          key={item._id}
          className="work__link link"
        >
          <motion.div
            key={item._id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="work__item-wrap"
          >
            <div className="text__wrap work__item">
              <h2 className="subheading work op-40">{item.name}</h2>
              <div className="text__mask">
                <p className="para work">{item.role}</p>
              </div>
            </div>
            <div className="img__mask">
              <Image
                className="work__img"
                src={item.landingImg.url}
                alt={item.landingImg.alt}
                width={300}
                height={300}
              />
            </div>
          </motion.div>
        </Link>
      ))}
    </>
  );
}
