"use client";
import Button from "@/app/components/ui/Button";
import { IoMdDownload } from "react-icons/io";
import Education from "./Education";
import WorkHistory from "./WorkHistory";
import Skills from "./Skills";
import Interests from "./Interests";
import { motion, AnimatePresence } from "framer-motion";
import ProgressBar from "../ui/ProgressBar";

const downloadLink =
  "https://drive.google.com/file/d/1MS_0vqQFtNE0vXlmvEgbYmA6xx8wsZLx/view?usp=sharing";

const OldAboutWrap = ({
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
          <h1 className="text-2xl">{aboutData.title}</h1>
          <div className="w-8 h-[0.2rem] bg-gradient-green my-4" />

          <p className="text-2xs text-white-dark font-medium my-8 max-w-[26rem] tablet:text-xs">
            {aboutData.statement}
          </p>

          <h2 className="text-base tablet:text-2xl">Career Summary</h2>

          <Button
            link={downloadLink}
            additionalClass="my-4 tablet:pt-0 lgMobile:pt-0"
            label="Download Icon"
          >
            <IoMdDownload className="text-xl lgMobile:text-2xl" />
          </Button>
          <div className="max-w-[920px] pt-8 ml-auto">
            <Education educationData={educationData} />
            <WorkHistory workHistoryData={workHistoryData} />
            <Interests interestsData={interestsData} />
          </div>
          <Skills skillsData={skillsData} />
        </div>

        <div className="w-4/5 mx-auto max-w-custom mt-20">
          <h1 className="text-2xl">What I have worked on</h1>

          <Button link="work" label="work button" additionalClass="my-8">
            My Work
          </Button>

          <p className="text-2xs text-white-dark font-medium mt-16 max-w-[22rem] tablet:text-xs tablet:mt-16">
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

export default OldAboutWrap;
