import Button from "@/app/components/ui/Button";

const WorkItemDescription = ({ description, url, snippet }) => {
  return (
    <>
      <div className="mt-20 tablet:mt-16">
        <p className="font-bebas w-full mb-12 tablet:mt-8">{description}</p>
        <Button link={url} label="live site">
          Live Site
        </Button>
        <p className="text-2xs w-4/5 mt-12">{snippet}</p>
      </div>
    </>
  );
};

export default WorkItemDescription;
