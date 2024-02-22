"use client";

import React, { useState } from "react";
import projectData from "@/cms/config/client-config";
import { useFormik } from "formik";
import * as Yup from "yup";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdErrorOutline } from "react-icons/md";

// Validation
const validationSchema = Yup.object().shape({
  name: Yup.string().required("* required"),
  email: Yup.string().email("Invalid email").required("* required"),
  message: Yup.string().required("* required"),
});

const createSanityContact = async (formData) => {
  try {
    const response = await fetch(
      `https://${projectData.projectId}.api.sanity.io/v1/data/mutate/${projectData.dataset}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_SANITY_TOKEN}`,
        },
        body: JSON.stringify({
          mutations: [
            {
              create: {
                _type: "contact",
                name: formData.name,
                email: formData.email,
                message: formData.message,
              },
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to create contact in Sanity");
    }

    const data = await response.json();
    console.log("Contact created in Sanity:", data);
  } catch (error) {
    console.error("Error creating contact in Sanity:", error);
  }
};

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        await createSanityContact(values);
        setIsSent(true);
      } catch (error) {
        console.error("Error submitting form:", error);
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  return (
    <div className="relative w-full ml-auto text-white-dark border-white-dark">
      {!isSent ? (
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col w-full h-full"
        >
          {/* Name */}
          <div className="relative flex items-center w-full border-white-dark h-16">
            <div
              className={`ml-4 p-1 text-[0.5rem] rounded-full border mt-[-0.25rem]font-bold transition duration-300 ${
                formik.touched.name
                  ? formik.errors.name
                    ? "scale-125 bg-gradient-red text-white-dark border-0"
                    : "scale-100 bg-gradient-green text-blue-dark border-0"
                  : ""
              }`}
            >
              {formik.errors.name ? (
                <MdErrorOutline />
              ) : (
                <IoIosArrowRoundForward />
              )}
            </div>
            <input
              type="text"
              placeholder="Your name"
              {...formik.getFieldProps("name")}
              className="ml-4 w-full text-2xs placeholder:text-2xs transition origin-left placeholder-white-darker focus:placeholder-white-dark focus:scale-110 h-full tablet:placeholder:text-xs"
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="absolute top-6 right-4 text-xs bg-gradient-red text-transparent bg-clip-text inline-block text-[12px]">
                {formik.errors.name}
              </div>
            ) : null}
          </div>

          {/* Email */}

          <div className="relative flex items-center border-t w-full border-white-dark h-16">
            <div
              className={`ml-4 p-1 text-[0.5rem] rounded-full border mt-[-0.25rem]font-bold transition duration-300 ${
                formik.touched.email
                  ? formik.errors.email
                    ? "scale-125 bg-gradient-red text-white-dark border-0"
                    : "scale-100 bg-gradient-green text-blue-dark border-0"
                  : ""
              }`}
            >
              {formik.errors.email ? (
                <MdErrorOutline />
              ) : (
                <IoIosArrowRoundForward />
              )}
            </div>
            <input
              type="email"
              placeholder="Your email"
              {...formik.getFieldProps("email")}
              className="ml-4 w-full text-2xs placeholder:text-2xs transition origin-left placeholder-white-darker focus:placeholder-white-dark focus:scale-110 h-full tablet:placeholder:text-xs"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="absolute top-6 right-4 text-xs bg-gradient-red text-transparent bg-clip-text inline-block text-[12px]">
                {formik.errors.email}
              </div>
            ) : null}
          </div>

          {/* Message */}
          <div className="relative flex pt-6 pb-4 border-t w-full border-white-dark h-32">
            <div
              className={`ml-4 p-1 text-[0.5rem] h-4 rounded-full border mt-[-0.25rem]font-bold transition duration-300 ${
                formik.touched.message
                  ? formik.errors.message
                    ? "scale-125 bg-gradient-red text-white-dark border-0"
                    : "scale-100 bg-gradient-green text-blue-dark border-0"
                  : ""
              }`}
            >
              {formik.errors.message ? (
                <MdErrorOutline />
              ) : (
                <IoIosArrowRoundForward />
              )}
            </div>
            <textarea
              placeholder="Your Message"
              {...formik.getFieldProps("message")}
              className="ml-4 resize-none	w-full text-2xs placeholder:text-2xs transition origin-top-left placeholder-white-darker focus:placeholder-white-dark focus:scale-y-110 h-full tablet:placeholder:text-xs"
            />
            {formik.touched.message && formik.errors.message ? (
              <div className="absolute top-6 right-4 text-xs bg-gradient-red text-transparent bg-clip-text inline-block text-[12px]">
                {formik.errors.message}
              </div>
            ) : null}
          </div>

          <div className="relative flex items-center w-full mx-auto">
            <hr className="border-white-dark" />
            <button
              type="submit"
              className="link absolute h-16 w-16 border rounded-full text-xs bg-blue-dark z-10 right-0 transition duration-300 border-white-dark tablet:right-0 tablet:left-auto lgMobile:h-20 lgMobile:w-20 hover:bg-white-dark hover:text-green-light focus:shadow-[0px_0px_15px_#0CDFC7]"
              disabled={formik.isSubmitting}
            >
              {formik.isSubmitting ? "SENDING..." : "SEND IT!"}
            </button>
          </div>
        </form>
      ) : (
        <div className="h-full py-20 flex flex-col justify-center overflow-hidden items-center text-center">
          <h2 className="text-2xl mb-4">SUCCESS</h2>
          <p className="text-xs">
            Thanks for getting in touch. <br />
            I will be in touch as soon as I can!
            <br />
            <br />
            Thanks again!
          </p>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
