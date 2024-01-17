export type IconImage = {
  url: string;
  alt: string;
};

export type Framework = {
  _id: string;
  _createdAt: string;
  name: string;
  iconImg: IconImage;
  rating?: number;
};
