import React from "react";
import * as FaIcons from "react-icons/fa";

const Nav = ({ setIsOpen }) => {
  return (
    <nav className="flex justify-end pt-8 pr-8">
      <button onClick={() => setIsOpen(true)} type="button">
        <FaIcons.FaBars className="text-white text-3xl" />
      </button>
    </nav>
  );
};

export default Nav;
