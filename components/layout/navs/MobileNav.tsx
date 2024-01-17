import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence, stagger } from "framer-motion";
import { usePathname } from "next/navigation";
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
  /* Select Active Link */
  const pathname = usePathname();

  /* Menu Toggle */
  const toggleMenu = () => {
    setIsOpen((prevOpen) => !prevOpen);

    const topBar = document.querySelector(".btn__bar.top");
    const btmBar = document.querySelector(".btn__bar.btm");
    const navBtn = document.querySelector(".nav__btn-container");
    topBar?.classList.toggle("rotate__top");
    btmBar?.classList.toggle("rotate__btm");
    navBtn?.classList.toggle("open");
  };

  const containerVariants = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: { ease: "easeOut", duration: 0.5 },
    },
    exit: {
      x: "100%",
      transition: { duration: 0.5, delay: 0.1 },
    },
  };

  const linkVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 0.75,
        delay: 0.1,
        staggerChildren: 0.2,
        staggerDelay: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        ease: "easeOut",
        duration: 0.5,
        staggerChildren: 0.2,
        staggerDelay: 0.2,
      },
    },
  };

  return (
    <>
      {/* Nav Bar */}
      <nav className="mobile__nav">
        <div className="logo__wrap">
          <Link href="/" className="link__logo">
            Nick Feltham
          </Link>
        </div>
        <div className="nav__btn-container" onClick={toggleMenu}>
          <div className="nav__btn-wrap">
            <div className="btn__bar top"></div>
            <div className="btn__bar btm"></div>
          </div>
        </div>
      </nav>

      {/* Nav Container */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="menu__container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="menu__inner">
              <div className="links__wrap">
                {/* Iterate through NavLink Array */}
                {navLinks.map((navItem, i) => (
                  <motion.p
                    className={`nav__link ${
                      pathname === navItem.link ? "active" : ""
                    }`}
                    key={i}
                    onClick={toggleMenu}
                    variants={linkVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <Link className="nav__link inactive" href={navItem.link}>
                      {navItem.title}
                    </Link>
                  </motion.p>
                ))}
              </div>

              <motion.div
                className="menu__footer"
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <h3 className="subheading op-40">Contact Details:</h3>
                <div className="contact__item__wrap">
                  <div className="contact__icon"></div>
                  <p className="para">+44 7413 977 023</p>
                </div>
                <div className="contact__item__wrap">
                  <div className="contact__icon"></div>
                  <p className="para">hi@nickfeltham.io</p>
                </div>
              </motion.div>
              <Footer position="absolute" innerWidth="full-width" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;
