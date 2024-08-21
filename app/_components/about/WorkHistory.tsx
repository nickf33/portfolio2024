import Template from "./Template";

const WorkHistory = ({ workHistoryData }) => {
  workHistoryData.sort((a, b) => a.order - b.order);

  return (
    <>
      {workHistoryData &&
        workHistoryData.map((data, idx) => (
          <Template key={idx} data={data} category="work" index={idx} />
        ))}
    </>
  );
};

export default WorkHistory;
