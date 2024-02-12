import { getSkills } from "@/cms/sanity-utils";
import Image from "next/image";

export default async function Skills() {
  const { title, skillsList } = await getSkills();

  return (
    <>
      <div className="relative my-20 ml-auto max-w-[28rem]">
        <hr />
        <h2 className="text-right text-xl mb-2 mt-8">{title}</h2>
        <div className="flex justify-end flex-wrap w-full">
          {skillsList.map((skill, idx) => (
            <div
              className="flex space-evenly m-4 mr-0 border rounded-lg w-12 h-12 overflow-hidden transition ease-in-out duration-300 hover:scale-105"
              key={idx}
            >
              <Image
                src={skill.skillIcon}
                alt={skill.alt}
                width={500}
                height={500}
                className="w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
