"use client";

import { useRef, useEffect, useState } from "react";
import Button from "@/app/_components/ui/Button";
import { IoMdDownload } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { GoDotFill } from "react-icons/go";
import { Resume } from "@/types/Resume";
import Template from "./Template";
import { TemplateProps } from "@/types/Template";
import Skills from "./Skills";
import Competencies from "./Competencies";
import { useInView } from "react-intersection-observer";

const downloadLink =
  "https://drive.google.com/file/d/1ymiOLYXuRIy1h5fU9Ry5Y814bIedFbYs/view?usp=sharing";

const AboutWrap = ({
  categories,
  aboutData,
  skillsData,
  competenciesData,
  educationData,
  resumeData,
}) => {
  const [activeSection, setActiveSection] = useState("");

  const scrollOffSet = 101;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ type: "tween", duration: 1 }}
        className="relative items-center w-full min-h-screen pt-[20vh] pb-32"
      >
        <div className="w-4/5 mx-auto max-w-custom">
          <Intro aboutData={aboutData} downloadLink={downloadLink} />
          <div className="mt-20 w-full grid grid-cols-3 tablet:grid-cols-1">
            <div className="w-full h-full col-span-1 pr-12 tablet:hidden">
              <AboutNav
                categories={categories}
                activeSection={activeSection}
                scrollOffSet={scrollOffSet}
              />
            </div>
            <div className="mt-2 w-full h-full col-span-2">
              <Section id={categories[0]} setActiveSection={setActiveSection}>
                <Template data={educationData} category={categories[0]} />
              </Section>
              <Section id={categories[1]} setActiveSection={setActiveSection}>
                <TemplateIterator resumeData={resumeData} />
              </Section>
              <Section id={categories[2]} setActiveSection={setActiveSection}>
                <Competencies competenciesData={competenciesData} />
              </Section>
              <Section id={categories[3]} setActiveSection={setActiveSection}>
                <Skills skillsData={skillsData} />
              </Section>
            </div>
          </div>
        </div>

        <Section id={categories[4]} setActiveSection={setActiveSection}>
          <Lower />
        </Section>
      </motion.div>
    </AnimatePresence>
  );
};

// Introduction and personal statement
// Includes everything down to the first button

// About DataProps
interface AboutDataProps {
  title: string;
  statement: string;
}

const Intro = ({
  aboutData,
  downloadLink,
}: {
  aboutData: AboutDataProps;
  downloadLink: string;
}) => {
  //Destructure Data
  const { title, statement } = aboutData;

  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, stiffness: 10 }}
        className="text-2xl"
      >
        {title}
      </motion.h1>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: 48 }}
        transition={{ delay: 0.2, stiffness: 10 }}
        className="h-[0.2rem] bg-gradient-green my-4"
      />
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, stiffness: 10 }}
        className="text-2xs text-white-dark font-medium my-8 max-w-[26rem] tablet:text-xs"
      >
        {statement}
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, stiffness: 10 }}
        className="text-base tablet:text-2xl mt-12"
      >
        Career Summary
      </motion.h2>
      <Button
        link={downloadLink}
        additionalClass="my-4 tablet:pt-0 lgMobile:pt-0"
        label="Download Icon"
        delay={0.8}
      >
        <IoMdDownload className="text-xl lgMobile:text-2xl" />
      </Button>
    </>
  );
};

interface NavProps {
  categories: string[];
  activeSection: string;
  scrollOffSet: number;
}

const AboutNav = ({ categories, activeSection, scrollOffSet }: NavProps) => {
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    category: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(category);
    if (element) {
      const topOffset = element.offsetTop - scrollOffSet;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="w-full sticky top-10">
      {categories.map((category, index) => (
        <motion.a
          key={index + category}
          href={`#${category}`}
          className={`border-b border-white-dark py-3 flex items-center`}
          onClick={(e) => handleClick(e, category)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence>
            {activeSection === category && (
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <GoDotFill className="text-green-light mr-2" />
              </motion.div>
            )}
          </AnimatePresence>
          <p className="text-sm font-bebas">{category}</p>
        </motion.a>
      ))}
    </div>
  );
};

const Lower = () => {
  return (
    <>
      <div className="w-4/5 mx-auto max-w-custom mt-20">
        <h1 className="tablet:text-2xl">What I have worked on</h1>

        <Button link="projects" label="projects button" additionalClass="my-4">
          Projects
        </Button>

        <p className="text-2xs text-white-dark font-medium mt-8 max-w-[22rem] tablet:text-xs tablet:mt-16">
          Since graduating from the Open University, I have worked on some
          personal projects to bridge gaps in my knowledge and upgrade my stack
          to include React and Next.js. Check out some of the projects I have
          been working on.
        </p>
      </div>
    </>
  );
};

interface SectionProps {
  id: string;
  setActiveSection: (id: string) => void;
  children: React.ReactNode;
}

const Section = ({ id, setActiveSection, children }: SectionProps) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      setActiveSection(id);
    }
  }, [inView, id, setActiveSection]);

  return (
    <section id={id} ref={ref}>
      {children}
    </section>
  );
};

interface TemplateIteratorProps {
  resumeData: Resume[];
}

const TemplateIterator = ({ resumeData }: TemplateIteratorProps) => {
  const sortedData = [...resumeData].sort((a, b) => a.order - b.order);

  return (
    <>
      {sortedData.map((item) => (
        <Template
          key={item._id}
          data={item as unknown as TemplateProps["data"]}
          category={item.category}
        />
      ))}
    </>
  );
};

export default AboutWrap;
