import { getProjects } from "@/cms/sanity-utils";
import ProjectsWrap from "../_components/projects/display/ProjectsDisplayWrap";

export default async function Projects() {
  const projectsData = await getProjects();

  return <ProjectsWrap projectsData={projectsData} />;
}
