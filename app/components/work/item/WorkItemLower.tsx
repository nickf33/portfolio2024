import WorkItemImg from "./WorkItemImg";

const WorkItemLower = ({ title, text, img }) => {
  return (
    <>
      <div className="">
        <h3 className="text-xl mt-32 tablet:mt-16">{title}</h3>
        <hr className="my-8" />
        <div className="max-w-[26rem]">
          <p className="text-2xs mb-8">{text}</p>
        </div>
        <WorkItemImg img={img} />
      </div>
    </>
  );
};

export default WorkItemLower;
