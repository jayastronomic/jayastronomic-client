import React from "react";
import g2 from "../assets/g2.png";
import Socials from "../components/Socials";

const Home = () => {
  return (
    <div className="relative flex flex-col items-center justify-center text-white blur-md flex-1 animate-fade-in opacity-0">
      <div className="flex flex-col items-center text-gray-300">
        <div className="font-bold text-4xl transform md:text-5xl hero glitch layers josefin text-center">
          <p className="text-sm">The</p>
          <p>ONYX ROOM</p>
        </div>
        <div className="font-thin md:text-xl">
          <p>Freelance Web Developer</p>
          <p>Full Stack Software Engineer</p>
        </div>
      </div>
      <div className="flex items-center justify-between fixed bottom-0 left-0 w-full text-sm pb-8 px-8">
        <div className="flex items-center">
          <p className="pr-4 font-thin opacity-50 hero2">Worked with</p>
          <div>
            <a href="https://www.g2.com/">
              <img
                alt="G2 Logo"
                className="w-10 opacity-50 saturate-0 hover:saturate-100 transition"
                src={g2}
              />
            </a>
          </div>
        </div>
        <div className="font-thin text-gray-200 opacity-50">
          Shader by {""}
          <a
            className="underline hover:text-blue-300 transition"
            href="https://threejs-journey.com/#"
          >
            Bruno Simon
          </a>
        </div>
      </div>
      <Socials />
    </div>
  );
};

export default Home;
