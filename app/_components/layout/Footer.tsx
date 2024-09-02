"use client";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { usePathname } from "next/navigation";
import Link from "next/link";
import MagneticWrap from "../ui/MagneticWrap";

const icons = [<FaLinkedinIn key="0" />, <FiGithub key="1" />];

const SocialLink = ({ link, idx }) => {
  return (
    <>
      <MagneticWrap>
        <Link target="_blank" href={link} rel="noopener noreferrer">
          <div className="ml-6 text-gradient-green inline-block text-xs hover:text-red-500 link">
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
        <footer className="absolute bottom-0 w-full h-12 overflow-hidden">
          <div className="flex justify-between items-center h-full w-4/5 mx-auto max-w-custom">
            <div className="text-2xs bg-gradient-green text-transparent bg-clip-text inline-block">
              Portfolio 2024
            </div>
            <div className="flex">
              <SocialLink
                link="https://www.linkedin.com/in/nick-feltham-6661362b6/"
                idx="0"
              />
              <SocialLink link="https://github.com/nickf33" idx="1" />
            </div>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
