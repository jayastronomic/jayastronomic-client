import React from "react";
import g2 from "../assets/g2.png";

const Home = () => {
  return (
    <div className="relative flex flex-col items-center justify-center text-white blur-md flex-1 animate-fade-in opacity-0">
      <div className="flex flex-col items-center text-gray-300">
        <p className="font-bold text-4xl transform">Julian Smith</p>
        <div className="font-thin">
          <p>Freelance Web Developer</p>
          <p>Full Stack Software Engineer</p>
        </div>
      </div>
      <div className="flex items-center justify-between fixed bottom-0 left-0 w-full text-sm pb-8 px-8">
        <div className="flex items-center">
          <p className="pr-4 font-thin">Worked with</p>
          <div>
            <img
              alt="G2 Logo"
              className="w-10 opacity-50 saturate-0 hover:saturate-100 transition"
              src={g2}
            />
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
    </div>
  );
};

export default Home;
