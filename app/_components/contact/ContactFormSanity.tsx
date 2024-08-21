"use client";

import React, { useState } from "react";
import projectData from "@/cms/config/client-config";
import { useFormik } from "formik";
import * as Yup from "yup";
import CustomInput from "./CustomInput";
import CustomTextArea from "./CustomTextArea";

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
          <CustomInput
            height={"h-16"}
            error={formik.errors.name}
            touched={formik.touched.name}
            placeholder="Your name"
            {...formik.getFieldProps("name")}
          />

          <CustomInput
            height={"h-16"}
            error={formik.errors.email}
            touched={formik.touched.email}
            placeholder="Your email"
            {...formik.getFieldProps("email")}
          />

          <CustomTextArea
            height={"h-32"}
            error={formik.errors.message}
            touched={formik.touched.message}
            placeholder="Your message"
            {...formik.getFieldProps("message")}
          />

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
