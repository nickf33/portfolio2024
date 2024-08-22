import Template from "./Template";

const Education = ({ educationData }) => {
  return (
    <>
      {educationData && (
        <Template
          data={educationData}
          category="education"
          id="education"
          index={0}
        />
      )}
    </>
  );
};

export default Education;
