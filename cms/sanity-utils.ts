import { About } from "../types/About";
import { Work } from "../types/Works";
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
`
  );
}
// Get all projects
export async function getWorks(): Promise<Work[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "work"]{
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
      role,
      credits,
      description,
      snippet,
      "parallaxOne": {
        "url": parallaxOne.asset->url,
        "alt": parallaxOne.alt,
      },
      "parallaxTwo": {
        "url": parallaxTwo.asset->url,
        "alt": parallaxTwo.alt,
      },
      lowerTitle,
      lowerText,
      "lowerImg": {
        "url": lowerImg.asset->url,
        "alt": lowerImg.alt,
      },
      link,
    }`
  );
}
// Get single project
export async function getWork(slug: string): Promise<Work> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "work" && slug.current == $slug][0]{
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
      role,
      credits,
      description,
      snippet,
      "parallaxOne": {
        "url": parallaxOne.asset->url,
        "alt": parallaxOne.alt,
      },
      "parallaxTwo": {
        "url": parallaxTwo.asset->url,
        "alt": parallaxTwo.alt,
      },
      lowerTitle,
      lowerText,
      "lowerImg": {
        "url": lowerImg.asset->url,
        "alt": lowerImg.alt,
      },
      link,
    }`,
    { slug }
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
`
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
      listtitle,
      listItems,
      startDate,
      endDate,
    }
`
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
    `
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
`
  );
}
