export type ProjectImage = {
  url: string;
  alt: string;
};

export type Header = {
  _id: string;
  _createdAt: string;
  title: string;
  abtImg: ProjectImage;
  designImg: ProjectImage;
  devImg: ProjectImage;
};
