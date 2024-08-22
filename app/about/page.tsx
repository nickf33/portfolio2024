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

  const categories = [];

  console.log(resumeData);

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
