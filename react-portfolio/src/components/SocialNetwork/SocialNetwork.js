import React from "react";
import "./SocialNetwork.css";

function SocialMedia() {
  return (
    <div className="social-media-wrapper">
      <a
        href="mailto:nicolewestgard@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="link to the email"
      >
        <img
          src="logo_mail.png"
          alt="Email!"
          fill="var(--color-primary)"
          width="80"
          height="80"
          viewBox="0 0 24 24"
        ></img>
      </a>
      <a
        href="https://www.linkedin.com/in/nicole-westgard-ba5a8ba"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="link to linkedin"
      >
        <img
          src="logo_linkedin.png"
          alt="LinkedIn!"
          fill="var(--color-primary)"
          width="120"
          height="80"
          viewBox="0 0 24 24"
        ></img>
      </a>
      <a
        href="https://github.com/westgards"
        target="_blank"
        aria-label="link to Github"
        rel="noopener noreferrer"
      >
        <img
          src="logo_github_icon.png"
          alt="Github!"
          fill="var(--color-primary)"
          width="80"
          height="80"
          viewBox="0 0 24 24"
        ></img>
      </a>
    </div>
  );
}

export default SocialMedia;
