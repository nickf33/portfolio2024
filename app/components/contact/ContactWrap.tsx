"use client";
import ContactFormSanity from "./ContactFormSanity";
import ContactDetails from "./ContactDetails";
import { motion, AnimatePresence } from "framer-motion";

const ContactWrap = ({ data }) => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: "tween", duration: 1 }}
          className="relative items-center w-full min-h-screen pt-[20vh] pb-32"
        >
          <div className="w-4/5 mx-auto max-w-custom">
            <h1 className="text-2xl">{data.title}</h1>
            <div className="w-8 h-[0.2rem] bg-gradient-to-br from-green-light to-blue-light my-4" />
            <div className="grid grid-cols-2 tablet:grid-cols-1">
              <div className="w-4/5">
                <p className="text-2xs text-white-dark font-medium tablet:text-xs tablet:hidden">
                  {data.text}
                </p>
                <ContactDetails />
              </div>
              <div className="tablet:mt-12">
                <h3 className="text-sm text-white-dark mb-4">Contact Form:</h3>
                <ContactFormSanity />
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default ContactWrap;
