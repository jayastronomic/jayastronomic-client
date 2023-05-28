import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavModal = ({ isOpen, setIsOpen }) => {
  const goTo = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={
        isOpen
          ? "absolute w-full h-full bg-black duration-500 z-10 bg-opacity-95 lg:hidden"
          : `absolute w-full h-full bg-transparent duration-500 -z-10`
      }
      on
    >
      <div
        className={`flex flex-col josefin hero2 space-y-10 text-2xl items-center text-gray-200 mt-20 transition ${
          isOpen ? "transition delay-300" : "opacity-0"
        } `}
      >
        <Link
          className="hover:text-gray-400 transition border-b border-transparent hover:border-gray-100"
          onClick={() => goTo()}
          to="/"
        >
          HOME
        </Link>
        <Link
          className="hover:text-gray-400 transition border-b border-transparent hover:border-gray-100"
          onClick={() => goTo()}
          to="/about"
        >
          ABOUT
        </Link>
        <Link
          className="hover:text-gray-400 transition border-b border-transparent hover:border-gray-100"
          onClick={() => goTo()}
          to="/projects"
        >
          PROJECTS
        </Link>
        <Link
          className="hover:text-gray-400 transition border-b border-transparent hover:border-gray-100"
          onClick={() => goTo()}
          to="/contact"
        >
          CONTACT
        </Link>
      </div>
      <button
        onClick={() => setIsOpen(false)}
        className={`absolute nasalization right-4 top-4 text-white text-xl hover:bg-gray-100${
          isOpen ? "transition delay-300" : "opacity-0"
        }`}
      >
        X
      </button>
    </div>
  );
};

export default NavModal;
