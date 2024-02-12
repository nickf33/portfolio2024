import { getWork, getWorks } from "@/cms/sanity-utils";
import WorkItemWrap from "@/app/components/work/item/WorkItemWrap";

export default async function WorkPage({ params }) {
  const slug = params.work;
  const workItem = await getWork(slug);
  const allWork = await getWorks();

  return (
    <>
      <WorkItemWrap data={workItem} workList={allWork}></WorkItemWrap>
    </>
  );
}
