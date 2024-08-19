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
  tech: string[];
  credits: string;
  projectOverview: string;
  missionObjective: string;
  challenges: {
    challengeTitle: string;
    challengeText: string;
  }[];
  conclusion: string;
  parallaxOne: WorkImage;
  parallaxTwo: WorkImage;
  lowerImg: WorkImage;
  link: string;
};
