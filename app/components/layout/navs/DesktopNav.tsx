"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/images/logo/logo.png";

const links = [
  { linkText: "about", url: "about" },
  { linkText: "work", url: "work" },
  { linkText: "contact", url: "contact" },
];

const NavLink = ({ linkText, url }) => {
  return (
    <>
      <Link
        href={`/${url}`}
        className="text-2xs font-semibold hover:text-green-light hover:underline"
      >
        <p>{linkText}</p>
      </Link>
    </>
  );
};

export default function DesktopNav() {
  return (
    <>
      <nav
        id="nav__bar"
        className="absolute top-0 min-h-[60px] w-full py-4 px-0 z-50"
      >
        <div className="flex justify-between items-center w-4/5 mx-auto my-0 max-w-custom">
          <Link href="/" className="flex justify-center">
            <Image
              src={logo}
              alt="logo"
              width={200}
              height={200}
              className="h-auto w-12"
              priority
            />
          </Link>
          <div className="flex w-40 justify-between items-center">
            {links.map((link, index) => (
              <NavLink key={index} linkText={link.linkText} url={link.url} />
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
