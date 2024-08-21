import Image from "next/image";
import MagneticWrap from "../ui/MagneticWrap";

interface Skill {
  skillIcon: string;
  alt: string;
}

const Skills = ({ skillsData }) => {
  const { title, skillsList } = skillsData;

  return (
    <>
      <div className="relative my-20 w-4/5 ml-auto tablet:w-full">
        <h2 className="text-right text-xl mb-2 mt-8">{title}</h2>

        <div className="flex justify-end flex-wrap w-full max-w-[26rem] laptop:max-w-[20rem] ml-auto">
          {skillsList.map((skill: Skill, idx: number) => (
            <MagneticWrap key={idx}>
              <div className="flex space-evenly m-4 mr-0 border rounded-lg w-10 h-10 overflow-hidden transition ease-in-out duration-300 hover:scale-105">
                <Image
                  src={skill.skillIcon}
                  alt={skill.alt}
                  width={500}
                  height={500}
                  className="w-full object-cover"
                />
              </div>
            </MagneticWrap>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
