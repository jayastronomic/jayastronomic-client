import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import Shader from "./Shader";
import Nav from "./Nav";
import NavModal from "./NavModal";

const Layout = () => {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    let layout = document.querySelector(".layout");
    layout.style.setProperty("--vh", `${vh}px`);
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="layout relative h-full overflow-hidden m-0">
      <Canvas style={{ width: "100%", height: "100%", position: "absolute" }}>
        <Shader />
      </Canvas>
      <div className="relative flex flex-col h-full">
        <Nav setIsOpen={setIsOpen} />
        <Outlet />
        <NavModal isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};

export default Layout;
