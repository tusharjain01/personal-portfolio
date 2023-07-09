import React from "react";
import "../styles/Home.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import Button from '@mui/material/Button';
import DownloadIcon from "@mui/icons-material/Download";
import { Link } from "react-router-dom";
import ResumePDF from "../assets/Tushar_Jain_Resume.pdf"
function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi,My Name is Tushar</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating</p>
          <div className="container">
          <Link to="https://www.linkedin.com/in/tushar2jain"><LinkedInIcon /></Link>
          <Link to={`mailto:tushar.roopam@gmail.com`}><EmailIcon /></Link>
          <Link to="https://www.github.com/tusharjain01"><GitHubIcon /></Link>
          <Button 
            variant="contained" 
            endIcon={<DownloadIcon />} 
            size="large" 
            style={{
              'backgroundColor': '#3e497a',
              'color' : 'color: #e9d35b'
            }}
            href={ResumePDF}
          >
            Download Resume
          </Button>
          </div>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              ReactJS,Redux,HTML,CSS,NPM, BootStrap,MaterialUI
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript,Java,Python,C#,C,C++</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>MySQL,MongoDB,Amazon S3,MS SQL</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
