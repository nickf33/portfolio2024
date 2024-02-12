export type WorkImage = {
  url: string;
  alt: string;
};

export type Work = {
  _id: string;
  _createdAt: string;
  category: { value: string };
  name: string;
  slug: string;
  landingImg: WorkImage;
  tech: string;
  role: string;
  credits: string;
  description: string;
  snippet: string;
  parallaxOne: WorkImage;
  parallaxTwo: WorkImage;
  lowerTitle: string;
  lowerText: string;
  lowerImg: WorkImage;
  link: string;
};
