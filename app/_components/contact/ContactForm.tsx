"use client";

import React, { useState } from "react";

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

  const handleSubmit = (event) => {
    setIsSubmitting(true);

    setTimeout(() => {
      console.log("Sent :" + formData);
      setIsSubmitting(false);
      setIsSent(true);
    }, 5000);
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
            >
              {isSubmitting ? "..." : "Submit"}
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
