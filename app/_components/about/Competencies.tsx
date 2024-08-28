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
  return (
    <>
      <div className="pt-6">
        <h2 className="text-lg">{title}</h2>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {categories.map((category, index) => (
            <div key={`${category._id}-${index}`} className="">
              <h4 className="text-xs">{category.categoryName}</h4>
              <InnerMap category={category} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const InnerMap = ({ category }) => {
  return (
    <>
      <div className="flex flex-col">
        {category.skills.map((skill, index) => (
          <p
            key={`${category._id}-${skill}-${index}`}
            className="flex items-center text-2xs my-1"
          >
            <span className="text-green-light mr-2">
              <GiCheckMark />
            </span>
            {skill}
          </p>
        ))}
      </div>
    </>
  );
};

export default Competencies;
