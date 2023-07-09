import React from "react";
import me from "../assets/me.jpeg";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center text-white blur-md flex-1 animate-fade-in opacity-0 p-8 overflow-auto hidescrollbar space-y-4 lg:flex-row lg:space-x-20">
      <div className="relative">
        <div className="relative w-56 h-64 overflow-hidden bg-[#1e1e1e] rounded shadow-xl border border-neutral-700 left-2">
          <img
            className="absolute object-cover -translate-y-4 rotate-[9deg] z-10 glitch layers"
            src={me}
          />
          <div className="absolute w-10 h-28 bg-[#232323] bottom-0 right-0"></div>
        </div>
        <div className="absolute bottom-4 left-6 w-56 h-64 -z-10 hero-glow border border-double opacity-60 bg-neutral-400"></div>
      </div>
      <div className="space-y-4 max-w-2xl">
        <h1 className="font-bold text-2xl md:text-3xl hero2 text-gray-200">
          Born in 1994. Raised in Southside Chicago. Coding since 2020.
        </h1>
        <div className="space-y-4 font-thin">
          <p>
            I’m Julian A. Smith, a passionate creative who indulges in building
            experiences, currently working as a freelance web developer. I’ve
            been in the tech space for 2 years now, learning all I can about web
            design and software engineering.{" "}
          </p>
          <p>
            Proficient in Front-End Engineering, Back-end Engineering, and Full
            Stack Engineering.
          </p>
          <p>
            I enjoy creating fun memories with friends and eating new foods in
            the city. I love video games, coding, and anything sci-fi related. I
            am also a fan of the cyber punk aesthetic.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
