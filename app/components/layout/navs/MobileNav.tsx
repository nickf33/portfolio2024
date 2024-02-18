import Link from "next/link";
import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "@/images/logo/logo.png";
import MagneticWrap from "../../ui/MagneticWrap";
import ContactDetails from "../../contact/ContactDetails";
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

  // Hide nav on scroll
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  });

  // toggle nav
  const toggleMenu = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  return (
    <>
      {/* Nav Bar */}
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: -100 },
        }}
        animate={isHidden && !isOpen ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="bg-blue-dark min-h-[90px] flex justify-between items-center px-[10vw] fixed top-0 w-full z-[101]"
      >
        <div className="logo__wrap">
          <Link href="/" className="flex justify-center">
            <Image
              src={logo}
              alt="logo"
              width={200}
              height={200}
              className="h-auto w-16"
              priority
            />
          </Link>
        </div>
        <MagneticWrap>
          <div
            className={`h-8 w-8 rounded-full flex items-center justify-center border border-white-dark transition-colors duration-400 ${
              isOpen ? "bg-white-dark" : "bg-blue-dark"
            }`}
            onClick={toggleMenu}
          >
            <div className="w-4/5 h-3 flex flex-col justify-between">
              <div
                className={`relative w-4/5 mx-auto h-0.5 transition duration-400 rounded ${
                  isOpen
                    ? "rotate-45 bg-green-light top-[0.33rem]"
                    : "bg-white-darker top-[0.1rem]"
                }`}
              ></div>
              <div
                className={`relative w-4/5 mx-auto h-0.5 bg-light-color transform transition-transform duration-400 ${
                  isOpen
                    ? "-rotate-45 bg-green-light bottom-[0.33rem] shadow-lg"
                    : "bg-white-darker bottom-[0.1rem]"
                }`}
              ></div>
            </div>
          </div>
        </MagneticWrap>
      </motion.nav>

      {/* Nav Container */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="bg-blue-dark fixed top-0 right-0 max-w-[26rem] h-screen w-full overflow-y-scroll flex justify-center items-end z-[100] shadow-[0px_35px_65px_rgba(255,255,255,0.1)]"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ stiffness: 600 }}
            >
              <div className="relative w-full px-[10vw] h-[85%] min-h-26rem flex flex-col justify-between">
                <div className="w-full">
                  <hr />
                  <div className="py-4">
                    {/* Iterate through NavLink Array */}
                    {navLinks.map((navItem, i) => (
                      <p
                        className={`text-2xl py-4 mx-0 transition hover:opacity-80 ${
                          pathname === navItem.link
                            ? "text-white-darker before:content-['•'] before:mr-4"
                            : ""
                        }`}
                        key={i}
                        onClick={toggleMenu}
                      >
                        <Link className="opacity-80" href={navItem.link}>
                          {navItem.title}
                        </Link>
                      </p>
                    ))}
                  </div>
                  <hr className="mt-4" />
                  <ContactDetails />
                </div>
              </div>
              <Footer />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed top-0 left-0 w-full h-screen z-[99] backdrop-blur"
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;
