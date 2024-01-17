import { getAbout } from "@/cms/sanity-utils";
import Resume from "@/components/Resume";
import Image from "next/image";
import Button from "@/components/Button";
import { IoMdDownload } from "react-icons/io";

export default async function About() {
  const aboutData = await getAbout();

  return (
    <>
      <section id="about" className="container page">
        <div className="inner__wrap">
          <div className="text__wrap">
            <div className="title__wrap center-start">
              <h1 className="heading">{aboutData.title}</h1>
            </div>
            <div className="title__bar"></div>
            <p className="para md-mw">{aboutData.statement}</p>
          </div>
          <h2 className="subheading"> Education & Work</h2>

          <Button
            fontSize="dl__icon"
            additionalClass="about-btn"
            href="/resume.pdf"
          >
            <IoMdDownload />
          </Button>
          <div className="container resume">
            <Resume />
          </div>
          <div className="text__wrap border-top">
            <h3 className="subheading">{aboutData.closingTitle}</h3>
            <p className="para md-mw">{aboutData.closingStatement}</p>
          </div>
        </div>
      </section>
    </>
  );
}
