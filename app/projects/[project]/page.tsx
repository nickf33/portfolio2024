import { getProject, getProjects } from "@/cms/sanity-utils";
import WorkItemWrap from "@/app/components/projects/item/ProjectItemWrap";

export default async function WorkPage({ params }) {
  const slug = params.work;
  const projectItem = await getProject(slug);
  const allProjects = await getProjects();

  return (
    <>
      <WorkItemWrap data={projectItem} projectList={allProjects}></WorkItemWrap>
    </>
  );
}
