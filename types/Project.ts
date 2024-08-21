export type ProjectImage = {
  url: string;
  alt: string;
};

export type Project = {
  _id: string;
  _createdAt: string;
  category: { value: string };
  name: string;
  slug: string;
  landingImg: ProjectImage;
  tech: string[];
  credits: string;
  projectOverview: string;
  missionObjective: string;
  challenges: {
    challengeTitle: string;
    challengeText: string;
  }[];
  conclusion: string;
  parallaxOne: ProjectImage;
  parallaxTwo: ProjectImage;
  lowerImg: ProjectImage;
  link: string;
};
