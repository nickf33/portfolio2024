import { getResume } from "@/cms/sanity-utils";
import Template from "./Template";

export default async function WorkHistory() {
  const resumeData = await getResume();
  resumeData.sort((a, b) => a.order - b.order);

  return (
    <>
      {resumeData.map((data, idx) => (
        <Template key={idx} data={data} category="work" index={idx} />
      ))}
    </>
  );
}
