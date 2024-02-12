import Button from "@/app/components/ui/Button";

const WorkItemDescription = ({ description, url, snippet }) => {
  return (
    <>
      <div className="mt-20 tablet:mt-16">
        <p className="font-bebas max-w-[26rem] mb-12 tablet:mt-8">
          {description}
        </p>
        <Button link={url} label="live site">
          Live Site
        </Button>
        <p className="text-2xs max-w-[14rem] mt-12 tablet:mt-8">{snippet}</p>
      </div>
    </>
  );
};

export default WorkItemDescription;
