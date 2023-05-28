import React from "react";
import * as FaIcons from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import Bars from "../icons/Bars";

const routes = [
  { pathname: "/", name: "Home" },
  { pathname: "/about", name: "About" },
  { pathname: "/projects", name: "Projects" },
  { pathname: "/contact", name: "Contact" },
];

const Nav = ({ setIsOpen }) => {
  const location = useLocation();
  const activeRoute = "josefin transition duration-300 uppercase";
  const unactiveRoute = "josefin transition duration-300 opacity-50 uppercase";
  return (
    <nav className="flex justify-end pt-8 px-8 lg:justify-start opacity-0 blur-md animate-fade-in">
      <button
        className="animate-fade-in"
        onClick={() => setIsOpen(true)}
        type="button"
      >
        <Bars />
      </button>
      <div className="hidden text-white space-x-16 font-thin lg:flex">
        {routes.map((route) => {
          return (
            <Link
              to={route.pathname}
              className={
                location.pathname === route.pathname
                  ? activeRoute
                  : unactiveRoute
              }
            >
              {route.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
