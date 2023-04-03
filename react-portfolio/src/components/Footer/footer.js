import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <footer >
      <p>A React project for University of Minnesota Fullstack Bootcamp</p>
      <div className='social-container'>
        <a href="mailto:nicolewestgard@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="link to the email">
          <img img src="logo_mail.png" fill="var(--color-primary)" width="20" height="20" viewBox="0 0 24 24" alt="mail"></img></a>
        <a  href="https://www.linkedin.com/in/nicole-westgard-ba5a8ba" target="_blank" rel="noopener noreferrer"
          aria-label="link to linkedin">
          <img img src="logo_linkedin.png" fill="var(--color-primary)" width="20" height="20" viewBox="0 0 24 24" alt="linkedin"></img>
        </a>
        <a  href="https://github.com/westgards" target="_blank" aria-label="link to Github" rel="noopener noreferrer">
          <img img src='logo_github_icon.png' fill="var(--color-primary)" width="20" height="20" viewBox="0 0 24 24" alt='github'></img>
        </a>
      </div>
      <p>&copy;2023 - westgards</p>
    </footer>
  )
}

export default Footer