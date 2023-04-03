import React from "react";
import ContactForm from "../components/ContactForm/ContactForm";
import "./Contact.css";
import SocialNetwork from "../components/SocialNetwork/SocialNetwork";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        <h2>Contact me</h2>
        <div className="social-media">
          <SocialNetwork />
        </div>
        <div className="form-wrapper">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;
