import { getEducation } from "@/cms/sanity-utils";
import Template from "./Template";

const Education = ({ educationData }) => {
  return <Template data={educationData} category="education" index="0" />;
};

export default Education;
