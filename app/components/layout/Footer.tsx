"use client";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { usePathname } from "next/navigation";
import Link from "next/link";

const icons = [<FaFacebookF />, <FaLinkedinIn />, <FiGithub />];

const SocialLink = ({ link, idx }) => {
  return (
    <>
      <Link href={link}>
        <div className="mr-6 text-green-light text-xs hover:opacity-70 link">
          {icons[idx]}
        </div>
      </Link>
    </>
  );
};

const Footer = () => {
  const pathname = usePathname();
  const pathsToHide = ["/admin"];
  const hideFooter = pathsToHide.includes(pathname);

  return (
    <>
      {!hideFooter && (
        <footer className="absolute bottom-0 w-full h-12">
          <div className="flex items-center h-full w-4/5 mx-auto max-w-custom">
            <div className="flex">
              <SocialLink link="https://facebook.com" idx="0" />
              <SocialLink link="https://facebook.com" idx="1" />
              <SocialLink link="https://facebook.com" idx="2" />
            </div>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
