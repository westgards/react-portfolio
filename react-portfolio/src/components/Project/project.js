import React from 'react'
import "./Project.css"

function Project({project}) {
    
    return (
    <div className='project-container'>
        <img src={project.screenshot} alt={project.title}/>
        <div className='overlay'></div>
        <div className='content'>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
        </div>
        <a href={project.linkDeployment} className="button" target="_blank" rel="noreferrer">Go to Application</a>
        <a href={project.linkRepository} target="_blank" rel="noreferrer" fill="var(--color-primary)" role="img" viewBox="0 0 24 24">
        <img src="logo_github_icon.png" alt="github"></img>
        </a>
    </div>
  )
}

export default Project