import { PortableTextBlock } from "sanity";

export type Article = {
  _id: string;
  _createdAt: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  mainImg: string;
  link: string;
  content: PortableTextBlock[];
};
