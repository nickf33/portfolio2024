import { getWorks } from "@/cms/sanity-utils";
import WorkWrap from "../components/work/display/WorkDisplayWrap";

export default async function Works() {
  const workData = await getWorks();

  return <WorkWrap workData={workData} />;
}
