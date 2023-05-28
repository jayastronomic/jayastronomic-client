import React from "react";
import A from "../../images/A.png";

const ProjectCard = ({ name, website, logo_url }) => {
  return (
    <div className="flex flex-col border-[0.5px] border-gray-700 rounded-2xl bg-black bg-opacity-80 shadow-2xl overflow-hidden hover:-translate-y-1.5 transition duration-300 hover:shadow-blue-900 hover:shadow-sm cursor-pointer">
      <div className="flex items-center justify-center w-full bg-black bg-opacity-80">
        <img src={A} alt="AOA" />
      </div>
      <div className="flex flex-col text-sm p-6 bg-">
        <span className="font-bold opacity-80">{name}</span>
        <a className="font-thin hover:underline" href={website}>
          {website}
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
