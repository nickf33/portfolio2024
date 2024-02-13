import Template from "./Template";

const Interests = ({ interestsData }) => {
  return (
    <>
      {interestsData && (
        <Template data={interestsData} category="Interests" index="0" />
      )}
    </>
  );
};

export default Interests;
