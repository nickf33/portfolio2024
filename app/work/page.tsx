import { getWorks } from "@/cms/sanity-utils";
import WorkWrap from "../components/work/WorkWrap";

export default async function Works() {
  const workData = await getWorks();

  return <WorkWrap workData={workData} />;
}
