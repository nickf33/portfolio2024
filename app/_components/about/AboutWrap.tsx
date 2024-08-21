"use client";
import { useRef, useState } from "react";
import Button from "@/app/_components/ui/Button";
import { IoMdDownload } from "react-icons/io";
import Education from "./Education";
import WorkHistory from "./WorkHistory";
import Skills from "./Skills";
import Interests from "./Interests";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowRoundForward } from "react-icons/io";

const downloadLink =
  "https://drive.google.com/file/d/1MS_0vqQFtNE0vXlmvEgbYmA6xx8wsZLx/view?usp=sharing";

const AboutWrap = ({
  aboutData,
  skillsData,
  interestsData,
  educationData,
  workHistoryData,
}) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ type: "tween", duration: 1 }}
        id="about"
        className="relative items-center w-full min-h-screen pt-[20vh] pb-32"
      >
        <div className="w-4/5 mx-auto max-w-custom">
          <Intro aboutData={aboutData} downloadLink={downloadLink} />
          <div className="mt-20 w-full grid grid-cols-3 tablet:grid-cols-1">
            <div className="w-full h-full col-span-1 pr-8 tablet:hidden">
              <AboutNav />
            </div>
            <div className="w-full h-full col-span-2 pl-8 mt-2 tablet:col-span-3">
              <AboutSections
                educationData={educationData}
                workHistoryData={workHistoryData}
                interestsData={interestsData}
              />
            </div>
          </div>

          {/* <Skills skillsData={skillsData} /> */}
        </div>

        <div className="w-4/5 mx-auto max-w-custom mt-20">
          <h1 className="tablet:text-2xl">What I have worked on</h1>

          <Button link="work" label="work button" additionalClass="my-4">
            My Work
          </Button>

          <p className="text-2xs text-white-dark font-medium mt-8 max-w-[22rem] tablet:text-xs tablet:mt-16">
            Since graduating from the Open University, I have worked on some
            personal projects to bridge gaps in my knowledge and upgrade my
            stack to include React and Next.js. Check out some of the projects I
            have been working on.
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

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
      <h1 className="text-2xl">{title}</h1>
      <div className="w-8 h-[0.2rem] bg-gradient-green my-4" />

      <p className="text-2xs text-white-dark font-medium my-8 max-w-[26rem] tablet:text-xs">
        {statement}
      </p>

      <h2 className="text-base tablet:text-2xl mt-12">Career Summary</h2>
      <Button
        link={downloadLink}
        additionalClass="my-4 tablet:pt-0 lgMobile:pt-0"
        label="Download Icon"
      >
        <IoMdDownload className="text-xl lgMobile:text-2xl" />
      </Button>
    </>
  );
};

const AboutNav = () => {
  const navItems = [
    { text: "Education", link: "#education" },
    { text: "Experience", link: "#experience" },
    { text: "Key Skills", link: "#key-skills" },
    { text: "Interests", link: "#interests" },
    { text: "Projects", link: "#projects" },
  ];
  return (
    <>
      <div className="w-full sticky top-10">
        {navItems.map((item, index) => (
          <div
            key={index + item.text}
            className="border-b border-white-dark py-3 flex items-center"
          >
            <p className="text-sm font-bebas">{item.text}</p>
          </div>
        ))}
      </div>
    </>
  );
};

const AboutSections = ({ educationData, workHistoryData, interestsData }) => {
  return (
    <>
      <Education educationData={educationData} />
      <WorkHistory workHistoryData={workHistoryData} />
      <Interests interestsData={interestsData} />
    </>
  );
};

export default AboutWrap;
