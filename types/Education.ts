export type Education = {
  _id: string;
  _createdAt: string;
  title: string;
  subTitle: string;
  brief: string;
  listTitle?: string | null;
  listItems?: { item: string }[];
  closing: string;
  startDate: string;
  endDate: string;
};
