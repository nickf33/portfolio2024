import { getEducation } from "@/cms/sanity-utils";
import Template from "./Template";

export default async function Education() {
  const educationData = await getEducation();

  return <Template data={educationData} category="education" index="0" />;
}
