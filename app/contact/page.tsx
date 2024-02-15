import ContactWrap from "@/app/components/contact/ContactWrap";
import { getAbout } from "@/cms/sanity-utils";

const data = {
  title: "Let's Talk",
  text: "I am currently looking for opportunities post graduation and be keen to hear from potential employers and recruiters. ",
};

export default async function Contact() {
  const aboutData = await getAbout();
  return (
    <>
      <ContactWrap data={data} img={aboutData.mainImg} />
    </>
  );
}
