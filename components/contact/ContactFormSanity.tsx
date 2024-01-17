"use client";

import React, { useState } from "react";
import projectData from "@/cms/config/client-config";

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
    <div className="form__container">
      {!isSent ? (
        <form className="form__wrap">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            id="name"
            className="form__field"
          />

          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleInputChange}
            id="email"
            className="form__field"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your Message"
            id="message"
            className="form__field  textarea"
          />
          <div className="btn__wrap form">
            <div className="btn__line"></div>
            <button
              type="button"
              className="link__btn form link"
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      ) : (
        <div className="text__wrap">
          <h2 className="subheading">Form Sent</h2>
        </div>
      )}
    </div>
  );
}
