import React from "react";
import { Link, useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";

import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <>
    <div className="project">
    <h1>{project.name}</h1>
      <img src={project.image} alt={project.name} />
      <p><b><Link to={project.url}>Project Link</Link></b></p>
      <p>
        <b>Skills</b> <br/>{project.skills}
      </p>
    </div>
    </>
  );
}

export default ProjectDisplay;
