// src/components/NavBar.js
import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  return (
    <nav className="bg-custom-nav-green font-custom">
      <div className="flex justify-end">
        {/* Right-side navigation items */}
        <ul className="flex space-x-4 text-custom-white text-2xl mr-[135px]">
          <li className="w-[165px] h-[64px] bg-custom-nav-item-bg flex items-center justify-center font-bold">
            <NavLink to={"/detect"}>YOLOv8</NavLink>
          </li>
          <li className="flex items-center justify-center w-[165px] h-[64px]">
            <NavLink to={"/VGG16"}>VGG16</NavLink>
          </li>
          <li className="flex items-center justify-center w-[165px] h-[64px]">
            <NavLink to={"/ResNet50"}>ResNet50</NavLink>
          </li>
          <li className="flex items-center justify-center w-[165px] h-[64px]">
            <NavLink to={"/InceptionV3"}>Inceptionv3</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
