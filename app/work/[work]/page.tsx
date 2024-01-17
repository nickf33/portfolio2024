import { getWork, getWorks } from "@/cms/sanity-utils";
import Image from "next/image";
import Button from "@/components/Button";
import WorkLanding from "@/components/workComponents/workLanding";
import WorkParallax from "@/components/workComponents/WorkParallax";
import WorkNav from "@/components/workComponents/WorkNav";

export default async function WorkPage({ params }) {
  const slug = params.work;

  const workItem = await getWork(slug);
  const workArray = await getWorks();

  const parallaxImgArray = [
    { url: workItem.parallaxOne.url, alt: workItem.parallaxOne.alt },
    { url: workItem.parallaxTwo.url, alt: workItem.parallaxTwo.alt },
  ];

  const landingImg = {
    url: workItem.landingImg.url,
    alt: workItem.landingImg.alt,
  };

  return (
    <>
      <div id="work" className="container work__item">
        <div className="inner__wrap">
          <div className="text__wrap work__item">
            <h1 className="heading">{workItem.name}</h1>
            <p className="para">{workItem.category.value}</p>
          </div>

          <WorkLanding landingImg={landingImg} />

          <div className="work__detail-container">
            <div className="detail__wrap">
              <p className="sm__para bold">
                Tech: <span className="sm__para"> {workItem.tech}</span>
              </p>
            </div>

            <div className="detail__wrap">
              <p className="sm__para bold">
                Role: <span className="sm__para"> {workItem.role}</span>
              </p>
            </div>

            <div className="detail__wrap">
              <p className="sm__para bold">
                Credits: <span className="sm__para"> {workItem.credits}</span>
              </p>
            </div>
          </div>
          <div className="description__wrap work">
            <h3 className="subheading md-mw">{workItem.description}</h3>
            <Button href="https://google.com">Live Site</Button>

            <div className="text__wrap sm-mw">
              <p className="para">
                Crafted in Figma, powered by Next.js and Sanity CMS. Structured
                with Typescript and SCSS.
              </p>
            </div>
          </div>

          <WorkParallax parallaxImgs={parallaxImgArray} />

          <div className="description__wrap work">
            <h3 className="subheading md-mw">{workItem.lowerTitle}</h3>
            <hr />
            <div className="text__wrap lg-mw">
              <p className="para">{workItem.lowerText}</p>
            </div>
          </div>
          <div className="lower__img-mask">
            <Image
              src={workItem.lowerImg.url}
              alt={workItem.lowerImg.alt}
              width={2000}
              height={2000}
              className="lower__img"
            />
          </div>

          <WorkNav workArray={workArray} slug={slug} />

          <div className="text__wrap">
            <h3 className="subheading md-mw top-3">
              If you like what you see, then get in touch!
            </h3>

            <Button additionalClass="margin-1" href="/contact">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
