import { getAbout } from "@/cms/sanity-utils";
import AboutWrap from "../components/about/AboutWrap";

export default async function About() {
  const aboutData = await getAbout();

  return (
    <>
      <AboutWrap aboutData={aboutData} />
    </>
  );
}
