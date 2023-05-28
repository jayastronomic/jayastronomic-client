import React from "react";
import ProjectCard from "../components/Cards/ProjectCard";

const ProjectContainer = ({ projects }) => {
  return (
    <div className="grid grid-cols-1  md:grid-cols-3">
      {projects.map((project) => {
        return <ProjectCard {...project} key={project.id} />;
      })}
    </div>
  );
};

export default ProjectContainer;
