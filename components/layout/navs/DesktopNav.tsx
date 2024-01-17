"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/images/logo/logo.png";

export default function DesktopNav() {
  return (
    <>
      <nav id="nav__bar">
        <div className="inner__wrap space-between">
          <Link href="/" className="logo__wrap">
            <Image
              src={logo}
              alt="logo"
              width={200}
              height={200}
              className="logo"
            />
          </Link>
          <div className="nav__links__wrap">
            <Link href="/about" className="nav__link">
              about
            </Link>

            <Link href="/work" className="nav__link">
              work
            </Link>

            <Link href="/contact" className="nav__link">
              contact
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
