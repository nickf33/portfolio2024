import { GiCheckMark } from "react-icons/gi";

interface Skill {
  item: string;
}

interface Category {
  _id: string;
  categoryName: string;
  skills: string[];
}

interface CompetenciesData {
  title: string;
  categories: Category[];
}

const Competencies = ({
  competenciesData,
}: {
  competenciesData: CompetenciesData;
}) => {
  const { title, categories } = competenciesData;

  console.log(categories);

  return (
    <>
      <div className="pt-6">
        <h2 className="text-lg">{title}</h2>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {categories.map((category) => (
            <div key={category._id} className="">
              <h4 className="text-xs">{category.categoryName}</h4>
              <div className="flex flex-col">
                {category.skills.map((skill, index) => (
                  <p key={index} className="flex items-center text-2xs my-1">
                    <span className="text-green-light mr-2">
                      <GiCheckMark />
                    </span>
                    {skill}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Competencies;
