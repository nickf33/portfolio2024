import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "@/images/logo/logo.png";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

import Footer from "../Footer";

/* Nav Links Array */
const navLinks = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Work", link: "/work" },
  { title: "Contact", link: "/contact" },
];

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  return (
    <>
      {/* Nav Bar */}
      <nav className="bg-blue-dark min-h-[90px] flex justify-between items-center px-[10vw] fixed top-0 w-full z-[101]">
        <div className="logo__wrap">
          <Link href="/" className="flex justify-center">
            <Image
              src={logo}
              alt="logo"
              width={200}
              height={200}
              className="h-auto w-20"
              priority
            />
          </Link>
        </div>
        <div
          className={`h-10 w-10 rounded-full flex items-center justify-center border border-white-dark transition-colors duration-400 ${
            isOpen ? "bg-white-dark" : "bg-blue-dark"
          }`}
          onClick={toggleMenu}
        >
          <div className="w-6 h-3 flex flex-col justify-between">
            <div
              className={`relative w-full h-0.5 transition duration-400 rounded ${
                isOpen
                  ? "rotate-45 bg-green-light top-[0.33rem]"
                  : "bg-white-dark"
              }`}
            ></div>
            <div
              className={`relative w-full h-0.5 bg-light-color transform transition-transform duration-400 ${
                isOpen
                  ? "-rotate-45 bg-green-light bottom-[0.33rem] shadow-lg"
                  : "bg-white-dark"
              }`}
            ></div>
          </div>
        </div>
      </nav>

      {/* Nav Container */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="bg-blue-dark fixed top-0 right-0 h-screen w-full overflow-y-scroll flex justify-center items-end z-[100]"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              stiffness: 1000,
              damping: 10,
            }}
          >
            <div className="menu__inner w-4/5 h-[85%] min-h-26rem flex flex-col justify-between">
              <div className="links__wrap w-full">
                <hr />
                {/* Iterate through NavLink Array */}
                {navLinks.map((navItem, i) => (
                  <motion.p
                    className={`text-2xl ${
                      i === 0 ? "pt-8 pb-4" : "py-4"
                    } mx-0 ${
                      pathname === navItem.link
                        ? "text-green-light before:content-['•'] before:mr-4"
                        : ""
                    }`}
                    key={i}
                    onClick={toggleMenu}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Link className="opacity-80" href={navItem.link}>
                      {navItem.title}
                    </Link>
                  </motion.p>
                ))}
                <hr className="mt-4" />
              </div>

              <motion.div
                className="relative w-full h-full px-0 border"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <h3 className="text-xl">Ways to Get in Touch</h3>
                <Link href="/" className="flex items-center my-4 mx-0">
                  <FaPhoneAlt className="contact__icon h-4 w-4 rounded-full text-white-dark mr-4" />
                  <p className="text-sm">+44 7413 977 023</p>
                </Link>
                <Link href="/" className="flex items-center my-4 mx-0">
                  <MdAlternateEmail className="contact__icon h-4 w-4 rounded-full text-white-dark mr-4" />
                  <p className="text-sm tracking-wider">hello@nickf.io</p>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;
