import Link from "next/link";
import Image from "next/image";

// Img optional for reusability
interface ContactDetailsProps {
  img?: {
    url: string;
    alt: string;
  };
}

const ContactDetails = ({ img }: ContactDetailsProps) => {
  // Data
  const contactDetails = [
    {
      text: "info@nickf.io",
      link: "mailto:nick.feltham33@gmail.com",
    },
    {
      text: "+44 7413 977 023",
      link: "tel:+447413977023",
    },
  ];

  // Component
  const ContactComponent = ({ text, link }) => {
    return (
      <>
        <div className="flex w-full mt-3 group items-center justify-end tablet:justify-start hover:underline">
          <Link href={link}>
            <p className="text-2xs text-white-dark font-mont transition duration-300 group-hover:text-white-dark tablet:text-xs">
              {text}
            </p>
          </Link>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="relative flex flex-col items-end justify-end w-full tablet:items-start tablet:mt-12">
        {img && (
          <Image
            src={img.url}
            alt={img.alt}
            width={500}
            height={500}
            className="rounded-full shadow h-8 w-8 mb-4"
          />
        )}
        <h3 className="text-2xs text-white-darker tablet:text-xs">
          Contact Details:
        </h3>
        {contactDetails.map((item, idx) => (
          <ContactComponent key={idx} text={item.text} link={item.link} />
        ))}
      </div>
    </>
  );
};

export default ContactDetails;
