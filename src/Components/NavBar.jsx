import React from 'react';
import { Link } from 'react-router-dom'; 

function Navbar(){
    return(
        <div className="navbar-container">
            <nav>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="#/portfolio">Portfolio</a></li>
                <li><a href="#/about-me">About me</a></li>
                <li><a href="#/education">Education</a></li>
                <li><a href="#/skills">Skills</a></li>
                <li><a href="#/experience">Experience</a></li>
                <li><a href="#/jobs">Jobs</a></li>
                <li><a href="#/contact">Contact</a></li>
              </ul>
            </nav>
        </div>      
    );
}

export default Navbar