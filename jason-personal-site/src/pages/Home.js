import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import "../styles/Home.css"

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2> Hi, my name is Jason</h2>
        <div className='prompt'>
          <p>A student passionate about Computer Science, Mathematics, and Engineering</p>
          <LinkedInIcon />
          <EmailIcon />
          <GitHubIcon />
        </div>
      </div>
      <div className='skills'>
        <h1> Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2> Front-End</h2>
            <span>ReactJS, HTML, CSS</span>
          </li>
          <li className='item'>
            <h2> Back-End</h2>
            <span>PostgreSQL, SQL Server, AWS (S3, Lambda, API Gateway)</span>
          </li>
          <li className='item'>
            <h2> Languages</h2>
            <span>Python, Java, Javascript, OCaml, MATLAB, R, C, Arduino, VBA</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home