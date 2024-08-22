import Template from "./Template";

// Define the structure of your work history data
interface ExperienceItem {
  brief: string;
  endDate: string;
  listTitle?: string;
  listItems?: Array<{
    _key: string;
    itemTitle?: string;
    itemDescription?: string;
  }>;
  order: number;
  startDate: string;
  subTitle: string;
  title: string;
  // Add any other fields that are in your workHistoryData
}

// Define props for the WorkHistory component
interface ExperienceProps {
  workHistoryData: ExperienceItem[];
}

const Experience = ({ workHistoryData }: ExperienceProps) => {
  workHistoryData.sort((a, b) => a.order - b.order);

  return (
    <>
      {workHistoryData &&
        workHistoryData.map((data, index: number) => (
          <Template
            key={index}
            data={data}
            category="work"
            id="experience"
            index={data.order}
          />
        ))}
    </>
  );
};

export default Experience;
