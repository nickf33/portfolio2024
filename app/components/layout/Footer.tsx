"use client";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { usePathname } from "next/navigation";
import Link from "next/link";
import MagneticWrap from "../ui/MagneticWrap";

const icons = [
  <FaFacebookF key="0" />,
  <FaLinkedinIn key="1" />,
  <FiGithub key="2" />,
];

const SocialLink = ({ link, idx }) => {
  return (
    <>
      <MagneticWrap>
        <Link target="_blank" href={link} rel="noopener noreferrer">
          <div
            className="ml-6 text-gradient-green inline-block text-xs hover:text-red-500 link"
            aria-label="social media icon"
          >
            {icons[idx]}
          </div>
        </Link>
      </MagneticWrap>
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
        <footer className="absolute bottom-0 w-full h-12 bg-blue-dark">
          <div className="flex justify-between items-center h-full w-4/5 mx-auto max-w-custom">
            <div className="text-2xs bg-gradient-green text-transparent bg-clip-text inline-block">
              Portfolio 2024
            </div>
            <div className="flex">
              <SocialLink link="https://facebook.com" idx="0" />
              <SocialLink link="https://linkedin.com" idx="1" />
              <SocialLink link="https://github.com" idx="2" />
            </div>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
