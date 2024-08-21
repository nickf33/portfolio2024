export type Education = {
  _id: string;
  _createdAt: string;
  title: string;
  subTitle: string;
  brief: string;
  modulesListTitle?: string | null;
  modulesListItems?: { item: string }[];
  skillsListTitle?: string | null;
  skillsListItems?: { item: string }[];
  closing: string;
  startDate: string;
  endDate: string;
};
