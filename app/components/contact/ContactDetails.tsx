import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

const ContactDetails = () => {
  const contactDetails = [
    {
      icon: <FaPhoneAlt />,
      text: "+44 7413 977 023",
      link: "tel:+447413977023",
    },
    {
      icon: <MdAlternateEmail />,
      text: "nick.feltham33@gmail.com",
      link: "mailto:nick.feltham33@gmail.com",
    },
  ];

  const Detail = ({ icon, text, link }) => {
    return (
      <>
        <div className="flex w-full my-2 group">
          <div className="text-sm mr-2 transition duration-300 group-hover:text-green-light tablet:hidden">
            {icon}
          </div>
          <Link
            href={link}
            className="link text-2xs font-mont font-bold transition duration-300 group-hover:text-green-light"
          >
            {text}
          </Link>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="relative flex flex-col justify-end w-full h-full pt-2 pb-4 tablet:pt-0">
        <h3 className="text-sm text-white-dark mb-2">Contact Details:</h3>
        {contactDetails.map((item, idx) => (
          <Detail
            key={idx}
            icon={item.icon}
            text={item.text}
            link={item.link}
          />
        ))}
      </div>
    </>
  );
};

export default ContactDetails;
