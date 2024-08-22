export interface Skill {
  _key: string;
  _type: "string";
  current: string;
}

export interface CompetencyCategory {
  _key: string;
  categoryName: string;
  skills: Skill[];
}

export interface CompetenciesProps {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: "competencies";
  title: string;
  categories: CompetencyCategory[];
}
