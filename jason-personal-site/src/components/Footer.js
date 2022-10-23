import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css"

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'> 
            <LinkedInIcon />
            <GitHubIcon />
        </div>
        <p> &copy; 2022 jrickenbacher.github.io </p>
    </div>
  )
}

export default Footer