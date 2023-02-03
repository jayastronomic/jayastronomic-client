import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavModal = ({ isOpen, setIsOpen }) => {
  const [absolute, setAbsolute] = useState("absolute");
  const closeNavModal = () => {
    setIsOpen(false);
    setTimeout(() => {});
  };
  return (
    <div
      className={
        isOpen
          ? "absolute w-full h-full bg-black duration-500 z-10"
          : `absolute w-full h-full bg-transparent duration-500 -z-10`
      }
    >
      <div
        className={`flex flex-col space-y-10 text-2xl items-center text-white mt-20 ${
          isOpen ? "transition delay-300" : "opacity-0"
        } `}
      >
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="">PROJECTS</Link>
        <Link to="">CONTACT</Link>
      </div>
      <button
        onClick={() => closeNavModal()}
        className={`absolute right-4 top-4 text-white text-3xl cursor-pointer ${
          isOpen ? "transition delay-300" : "opacity-0"
        }`}
      >
        <FaTimes />
      </button>
    </div>
  );
};

export default NavModal;
