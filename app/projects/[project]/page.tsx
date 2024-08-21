import { getProject, getProjects } from "@/cms/sanity-utils";
import ProjectItemWrap from "@/app/_components/projects/item/ProjectItemWrap";

export default async function ProjectPage({ params }) {
  const slug = params.project;
  const projectItem = await getProject(slug);
  const allProjects = await getProjects();

  return (
    <>
      <ProjectItemWrap data={projectItem} projectList={allProjects} />
    </>
  );
}
