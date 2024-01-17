import { motion } from "framer-motion";
import Image from "next/image";
import { getAbout } from "@/cms/sanity-utils";
import ContactDetails from "@/components/contact/ContactDetails";
import ContactFormSanity from "@/components/contact/ContactFormSanity";

export default async function Contact() {
  const aboutData = await getAbout();
  const aboutImg = {
    url: aboutData.mainImg.url,
    alt: aboutData.mainImg.alt,
  };
  return (
    <>
      <div id="contact" className="container page">
        <div className="inner__wrap">
          <div className="text__wrap contact">
            <div className="title__wrap space__between">
              <h1 className="heading">Contact</h1>
              <Image
                src={aboutImg.url}
                alt={aboutImg.alt}
                width={500}
                height={500}
                className="contact__img"
              />
            </div>
            <div className="title__bar contact"></div>
          </div>
          <div className="contact__grid">
            <ContactFormSanity />

            <ContactDetails />
          </div>
        </div>
      </div>
    </>
  );
}
