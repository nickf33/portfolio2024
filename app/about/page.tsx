import {
  getAbout,
  getSkills,
  getInterests,
  getEducation,
  getResume,
} from "@/cms/sanity-utils";
import AboutWrap from "../components/about/AboutWrap";

export default async function About() {
  const aboutData = await getAbout();
  const skillsData = await getSkills();
  const interestsData = await getInterests();
  const educationData = await getEducation();
  const workHistoryData = await getResume();

  return (
    <>
      <AboutWrap
        aboutData={aboutData}
        skillsData={skillsData}
        interestsData={interestsData}
        educationData={educationData}
        workHistoryData={workHistoryData}
      />
    </>
  );
}
