"use client";
import Button from "@/app/components/ui/Button";
import { IoMdDownload } from "react-icons/io";
import Education from "./Education";
import WorkHistory from "./WorkHistory";
import Skills from "./Skills";
import Interests from "./Interests";
import { motion } from "framer-motion";

const AboutWrap = ({ aboutData }) => {
  return (
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
        <div className="w-8 h-[0.2rem] bg-gradient-to-br from-green-light to-blue-light my-4"></div>
        <p className="text-2xs text-white-dark font-medium my-8 max-w-[26rem] tablet:text-xs">
          {aboutData.statement}
        </p>

        <h2 className="text-base mt-16 tablet:text-2xl">Career Summary</h2>

        <Button
          link="resume.pdf"
          additionalClass="tablet:pt-0 lgMobile:pt-0"
          label="Download Icon"
        >
          <IoMdDownload className="text-xl lgMobile:text-2xl" />
        </Button>
        <div className="max-w-[36rem] pt-8 ml-auto">
          <Education />
          <WorkHistory />
          <Interests />
        </div>
        <Skills />
      </div>

      <div className="w-4/5 mx-auto max-w-custom mt-20">
        <h1 className="text-2xl">{aboutData.title}</h1>

        <Button link="work" label="work button">
          View WORK
        </Button>

        <p className="text-2xs text-white-dark font-medium my-8 max-w-[22rem] tablet:text-xs">
          {aboutData.statement}
        </p>
      </div>
    </motion.div>
  );
};

export default AboutWrap;
