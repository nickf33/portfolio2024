import ContactWrap from "@/app/components/contact/ContactWrap";

const data = {
  title: "Let's Talk",
  text: "If you would like to get in touch to discuss any available opportunites",
};

const Contact = () => {
  return (
    <>
      <ContactWrap data={data} />
    </>
  );
};

export default Contact;
