import { About } from "../types/About";
import { Project } from "../types/Project";
import { Article } from "../types/Article";
import { Resume } from "../types/Resume";
import { Education } from "../types/Education";
import { Interests } from "../types/Interests";
import { Skills } from "../types/Skills";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";

// Get about section
export async function getAbout(): Promise<About> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "about"][0]{
      _id,
      _createdAt,
      title,
      statement,
      "mainImg": {
        "url": mainImg.asset->url,
        "alt": mainImg.alt,
      },
      closingTitle,
      closingStatement,
    }
`,
    {},
    {
      next: { revalidate: 3600 },
    }
  );
}

export async function getProjects(): Promise<Project[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      category,
      name,
      "slug": slug.current,
      "landingImg": {
        "url": landingImg.asset->url,
        "alt": landingImg.alt,
      },
      tech,
      projectOverview,
      missionObjective,
      challenges,
      conclusion,
      "parallaxOne": {
        "url": parallaxOne.asset->url,
        "alt": parallaxOne.alt,
      },
      "parallaxTwo": {
        "url": parallaxTwo.asset->url,
        "alt": parallaxTwo.alt,
      },
      "lowerImg": {
        "url": lowerImg.asset->url,
        "alt": lowerImg.alt,
      },
      link,
      credits
    }`,
    {},
    {
      next: { revalidate: 60 }, // Revalidate every minute
    }
  );
}

export async function getProject(slug: string): Promise<Project> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      category,
      name,
      "slug": slug.current,
      "landingImg": {
        "url": landingImg.asset->url,
        "alt": landingImg.alt,
      },
      tech,
      projectOverview,
      missionObjective,
      challenges,
      conclusion,
      "parallaxOne": {
        "url": parallaxOne.asset->url,
        "alt": parallaxOne.alt,
      },
      "parallaxTwo": {
        "url": parallaxTwo.asset->url,
        "alt": parallaxTwo.alt,
      },
      "lowerImg": {
        "url": lowerImg.asset->url,
        "alt": lowerImg.alt,
      },
      link,
      credits
    }`,
    { slug },
    {
      cache: "no-store",
    }
  );
}

// Get Articles
export async function getArticle(): Promise<Article> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "article"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      category,
      description,
      "mainImg": {
        "url": mainImg.asset->url,
        "alt": mainImg.alt,
      },
      link,
      content,
    }
`
  );
}
// Get Resume/ Work History
export async function getResume(): Promise<Resume[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "resume"]{
      _id,
      _createdAt,
      order,
      category,
      title,
      subTitle,
      brief,
      listTitle,
      listItems,
      startDate,
      endDate,
    }
`,
    {},
    {
      next: { revalidate: 3600 },
    }
  );
}

// Get Education
export async function getEducation(): Promise<Education> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "education"][0]{
      _id,
      _createdAt,
      title,
      subTitle,
      brief,
      modulesListTitle,
      modules,
      skillsListTitle,
      skills,
      closing,
      startDate,
      endDate,
    }
`,
    {},
    {
      next: { revalidate: 3600 },
    }
  );
}

// Get Skills list
export async function getSkills(): Promise<Skills> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "skills"][0]{
      _id,
      _createdAt,
      title,
      "skillsList": skillsList[] {
        skillName,
        "skillIcon": skillIcon.asset->url,
        "alt": skillIcon.alt
        }
      }
    `,
    {},
    {
      next: { revalidate: 3600 },
    }
  );
}

// Get Interests list
export async function getInterests(): Promise<Interests> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "interests"][0]{
      _id,
      _createdAt,
      title,
      brief,
    }
`,
    {},
    {
      next: { revalidate: 3600 },
    }
  );
}
