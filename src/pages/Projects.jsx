import React, { useEffect, useState } from "react";
import ProjectContainer from "../containers/ProjectContainer";
import { getAllProjects } from "../network/http/project";
import { projects } from "../data/projects";
const Projects = () => {
  // const [_, setProjects] = useState([]);
  // useEffect(() => {
  //   // const fetchProjects = async () => {
  //   //   const projects = await getAllProjects();
  //   //   setProjects(projects);
  //   // };
  //   // fetchProjects();
  //   setProjects(projects);
  // }, []);
  return (
    <div className="flex flex-col flex-1 text-white text-3xl opacity-0 animate-fade-in hero-glow blur-md p-8">
      <h1 className="text-center pb-8 josefin text-2xl">PROJECTS</h1>
      <div className="w-full h-full bg-white p-8 bg-opacity-5 rounded-2xl">
        <ProjectContainer projects={projects} />
      </div>
    </div>
  );
};

export default Projects;
