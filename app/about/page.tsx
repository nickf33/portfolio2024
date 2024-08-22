import {
  getAbout,
  getSkills,
  getCompetencies,
  getEducation,
  getResume,
} from "@/cms/sanity-utils";
import AboutWrap from "../_components/about/AboutWrap";

export default async function About() {
  const aboutData = await getAbout();
  const skillsData = await getSkills();
  const competenciesData = await getCompetencies();
  const educationData = await getEducation();
  const resumeData = await getResume();

  const categories = [educationData.category];

  console.log(categories);

  return (
    <AboutWrap
      categories={categories}
      aboutData={aboutData}
      skillsData={skillsData}
      competenciesData={competenciesData}
      educationData={educationData}
      resumeData={resumeData}
    />
  );
}
