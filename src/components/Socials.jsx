import React from "react";
import * as FaIcons from "react-icons/fa";

const Socials = () => {
  return (
    <div className="absolute left-8 top-8 flex flex-col space-y-8 lg:top-20">
      <a href="https://www.instagram.com/skeletinboy/">
        <FaIcons.FaInstagram className="text-3xl opacity-50 transition hover:opacity-100  hero-glow" />
      </a>
      <a href="https://www.linkedin.com/in/julian-antonio-smith/">
        <FaIcons.FaLinkedinIn className="text-3xl opacity-50 transition hover:opacity-100 hero-glow" />
      </a>
      <a href="https://twitter.com/julianthecoder">
        <FaIcons.FaTwitter className="text-3xl opacity-50 transition hover:opacity-100 hero-glow" />
      </a>
    </div>
  );
};

export default Socials;
