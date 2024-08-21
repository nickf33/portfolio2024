import ContactWrap from "@/app/_components/contact/ContactWrap";
import { getAbout } from "@/cms/sanity-utils";

const data = {
  title: "Let's Talk",
  text: "Whether you have an opportuinty you would like to discuss or a project in mind for development, please get in touch!",
};

export default async function Contact() {
  const aboutData = await getAbout();
  return (
    <>
      <ContactWrap data={data} img={aboutData.mainImg} />
    </>
  );
}
