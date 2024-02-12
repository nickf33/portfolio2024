const WorkItemSpec = ({ role, tech, credits }) => {
  const SpecItem = ({ title, text }) => {
    return (
      <>
        <div className="max-w-[8rem] h-full tablet:my-2">
          <p className="text-2xs">
            <span className="font-mont font-bold">{title}:</span> {text}
          </p>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="relative flex justify-between w-full mt-8 py-4 tablet:flex-col tablet:mt-4">
        <hr className="absolute top-0" />
        <SpecItem title="Role" text={role} />
        <SpecItem title="Tech" text={tech} />
        <SpecItem title="Credits" text={credits} />
      </div>
    </>
  );
};

export default WorkItemSpec;
