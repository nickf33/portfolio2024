import {
  getAbout,
  getSkills,
  getInterests,
  getEducation,
  getResume,
} from "@/cms/sanity-utils";
import AboutWrap from "../_components/about/AboutWrap";

export default async function About() {
  const aboutData = await getAbout();
  const skillsData = await getSkills();
  const interestsData = await getInterests();
  const educationData = await getEducation();
  const resumeData = await getResume();

  // Extract categories
  const allData = [
    ...(Array.isArray(educationData) ? educationData : []),
    ...(Array.isArray(skillsData) ? skillsData : []),
    ...(Array.isArray(interestsData) ? interestsData : []),
    ...(Array.isArray(resumeData) ? resumeData : []),
  ];

  const categories = [];

  return (
    <AboutWrap
      categories={categories}
      aboutData={aboutData}
      skillsData={skillsData}
      interestsData={interestsData}
      educationData={educationData}
      resumeData={resumeData}
    />
  );
}
