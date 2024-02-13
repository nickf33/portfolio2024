import Template from "./Template";

const Education = ({ educationData }) => {
  return (
    <>
      {educationData && (
        <Template data={educationData} category="education" index="0" />
      )}
    </>
  );
};

export default Education;
