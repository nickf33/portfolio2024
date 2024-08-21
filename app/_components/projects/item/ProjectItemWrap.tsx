"use client";

import ProjectItemImg from "./ProjectItemImg";
import ProjectParallax from "./ProjectItemParallax";
import ProjectItemNav from "./ProjectItemNav";
import Button from "@/app/_components/ui/Button";
import { AnimatePresence, motion } from "framer-motion";
import MagneticWrap from "../../ui/MagneticWrap";

const ProjectItemWrap = ({ data, projectList }) => {
  const { value, btnText } = data.category;

  const {
    category,
    challenges,
    conclusion,
    credits,
    landingImg,
    link,
    lowerImg,
    missionObjective,
    name,
    parallaxOne,
    parallaxTwo,
    projectOverview,
    slug,
    tech,
  } = data;

  // Creating arrays for parallax images and other image data
  const parallaxImgArray = [
    { url: parallaxOne.url, alt: parallaxOne.alt },
    { url: parallaxTwo.url, alt: parallaxTwo.alt },
  ];

  const imageData = {
    landingImg,
    lowerImg,
  };

  console.log(category);

  return (
    <>
      <>
        <AnimatePresence mode="wait">
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "tween", duration: 1 }}
            id="project"
            className="relative items-center w-full min-h-screen pt-[20vh] pb-32"
          >
            <div className="w-4/5 mx-auto max-w-custom">
              <h1 className="text-2xl">{name}</h1>

              <div className="w-8 h-[0.2rem] bg-gradient-to-br from-green-light to-blue-light my-4 " />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ dealy: 0.8, duration: 0.4 }}
                className="text-2xs font-bebas text-right"
              >
                Credit: {credits}
              </motion.p>

              <ProjectItemImg img={landingImg} />
              <TechButtons tech={tech} />
              <OverviewText projectOverview={projectOverview} />
              <Button link={link} label={value}>
                Live Site
              </Button>
              <ObjectiveText missionObjective={missionObjective} />
              <ProjectParallax parallaxImgs={parallaxImgArray} />

              <ChallengesList challengeArray={challenges} />
              <ProjectItemImg img={lowerImg} />

              <ConclusionText conclusion={conclusion} />

              <ProjectItemNav projectArray={projectList} slug={slug} />

              <div className="relative mt-40">
                <h1 className="text-xl">Let&apos;s Talk</h1>
                <Button link="contact" label="contact button">
                  Contact
                </Button>
                <p className="text-2xs text-white-dark font-medium my-8 max-w-[22rem] tablet:text-xs">
                  Whether you have an opportuinty you would like to discuss or a
                  project in mind for development, please get in touch!
                </p>
              </div>
              <div className=""></div>
            </div>
          </motion.div>
        </AnimatePresence>
      </>
    </>
  );
};

const TechButtons = ({ tech }: { tech: string[] }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      className="w-full flex justify-start items-center flex-wrap gap-4 mt-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {tech.map((item, index) => (
        <MagneticWrap key={item + index}>
          <motion.div
            variants={itemVariants}
            className="px-4 py-1 border border-white-dark text-white-dark bg-blue-dark font-mont text-2xs rounded-full transition hover:bg-white-dark hover:text-blue-dark"
          >
            {item}
          </motion.div>
        </MagneticWrap>
      ))}
    </motion.div>
  );
};

const OverviewText = ({ projectOverview }: { projectOverview: string }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ stiffness: 10, damping: 12 }}
        className="w-4/5 my-20"
      >
        <p className="font-bebas">{projectOverview}</p>
      </motion.div>
    </>
  );
};

const ObjectiveText = ({ missionObjective }: { missionObjective: string }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ stiffness: 10, damping: 12 }}
        className="w-4/5 my-20 max-w-[24rem]"
      >
        <p className="text-2xs">{missionObjective}</p>
      </motion.div>
    </>
  );
};

interface Challenge {
  challengeTitle: string;
  challengeText: string;
}

interface ChallengesListProps {
  challengeArray: Challenge[];
}

const ChallengesList = ({
  challengeArray,
}: ChallengesListProps): JSX.Element | null => {
  if (!challengeArray || challengeArray.length === 0) {
    return null;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="mb-20 mt-32 tablet:mt-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      <motion.h2 className="text-xl font-bold mb-4" variants={itemVariants}>
        Challenges & Outcomes
      </motion.h2>
      <motion.hr
        initial={{ width: "0%" }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="border-white-dark mb-10"
      />
      {challengeArray.map((challenge, index) => (
        <motion.div
          key={index}
          className="mb-4 max-w-[26rem]"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <h3 className="font-semibold mb-2">{challenge.challengeTitle}</h3>
          <p className="text-2xs">{challenge.challengeText}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

const ConclusionText = ({ conclusion }: { conclusion: string }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ stiffness: 10, damping: 12 }}
        className="my-12 max-w-[24rem]"
      >
        <h2 className="mb-4 text-xl">Conclusion</h2>
        <p className="text-2xs">{conclusion}</p>
      </motion.div>
    </>
  );
};

export default ProjectItemWrap;
