"use client";

import React, { useState } from "react";
import projectData from "@/cms/config/client-config";
import Line from "../ui/Line";

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

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      await createSanityContact(formData);
      setIsSent(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative w-full h-full text-white-dark">
      {!isSent ? (
        <form className="flex flex-col w-full h-full">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            id="name"
            className="text-2xs font-mont font-bold placeholder-white-darker bg-transparent border-b-2 h-8 border-white-dark pb-4 focus:outline-0 focus:text-xs focus:placeholder-white-dark tablet:border-t-2 tablet:pt-2"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleInputChange}
            id="email"
            className="text-2xs font-mont font-bold placeholder-white-darker bg-transparent border-b-2 pt-2 h-8 border-white-dark pb-4 focus:outline-0 focus:text-xs focus:placeholder-white-dark"
            required
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your Message"
            id="message"
            className="text-2xs font-mont font-bold placeholder-white-darker bg-transparent border-b-2 pt-2 h-32 border-white-dark pb-4 focus:outline-0 focus:text-xs focus:placeholder-white-dark"
            required
          />

          <div className="relative flex items-center w-full mx-auto">
            <Line />
            <button
              type="submit"
              className="link absolute h-16 w-16 border rounded-full text-xs bg-blue-dark z-10 right-0 transition duration-300 border-white-dark tablet:right-0 tablet:left-auto lgMobile:h-20 lgMobile:w-20 hover:bg-white-dark hover:text-green-light"
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              {isSubmitting ? "SENDING..." : "SEND IT!"}
            </button>
          </div>
        </form>
      ) : (
        <div className="h-32">
          <p className="text-xs">
            Thanks for getting in touch. <br />
            I'll be in touch as soon as I can!
            <br />
            <br /> Thanks again!
          </p>
        </div>
      )}
    </div>
  );
}
