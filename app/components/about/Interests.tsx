import { getInterests } from "@/cms/sanity-utils";
import Template from "./Template";

export default async function Interests() {
  const interestsData = await getInterests();

  return (
    <>
      {interestsData && (
        <Template data={interestsData} category="Interests" index="0" />
      )}
    </>
  );
}
