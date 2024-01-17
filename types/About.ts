export type ProjectImage = {
  url: string;
  alt: string;
};

export type About = {
  _id: string;
  _createdAt: string;
  title: string;
  statement: string;
  mainImg: ProjectImage;
  closingTitle: string;
  closingStatement: string;
};
