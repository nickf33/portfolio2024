"use client";

import WorkItemImg from "./WorkItemImg";
import WorkItemSpec from "./WorkItemSpec";
import WorkItemDescription from "./WorkItemDescription";
import WorkParallax from "./WorkItemParallax";
import WorkItemLower from "./WorkItemLower";
import WorkItemNav from "./WorkItemNav";
import Button from "@/app/components/ui/Button";
import { IoIosArrowRoundBack } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";

const WorkItemWrap = ({ data, workList }) => {
  const parallaxImgArray = [
    { url: data.parallaxOne.url, alt: data.parallaxOne.alt },
    { url: data.parallaxTwo.url, alt: data.parallaxTwo.alt },
  ];
  console.log(data);
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: "tween", duration: 1 }}
          id="work"
          className="relative items-center w-full min-h-screen pt-[20vh] pb-32"
        >
          <div className="w-4/5 mx-auto max-w-custom">
            <h1 className="text-2xl">{data.name}</h1>
            <p className="text-2xs text-white-dark font-medium my-1 max-w-[26rem] tablet:text-xs">
              {data.role}
            </p>

            <div className="w-8 h-[0.2rem] bg-gradient-to-br from-green-light to-blue-light my-4" />

            <WorkItemImg img={data.landingImg} />

            <WorkItemSpec
              role={data.role}
              tech={data.tech}
              credits={data.credits}
            />

            <WorkItemDescription
              description={data.description}
              url={data.url}
              snippet={data.snippet}
            />

            <WorkParallax parallaxImgs={parallaxImgArray} />

            <WorkItemLower
              title={data.lowerTitle}
              text={data.lowerText}
              img={data.lowerImg}
            />
            <WorkItemNav workArray={workList} slug={data.slug} />

            <div className="relative mt-40">
              <h1 className="text-xl">Let&apos;s Talk</h1>
              <div className="absolute top-4 right-0 flex items-center text-2xs group transition duration-300 laptop:hidden">
                <div className="relative transition duration-300 group-hover:translate-x-[-0.5rem]">
                  <IoIosArrowRoundBack />
                </div>
              </div>
              <Button link="contact" label="contact button">
                Contact
              </Button>
              <p className="text-2xs text-white-dark font-medium my-8 max-w-[22rem] tablet:text-xs">
                This will have the conclusion section.
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default WorkItemWrap;
