import React, { useState, useEffect } from "react";
import ThemeModeBtn from "./ThemeModeBtn";

export default function Header(props) {
  // Read the theme from local storage on component mount
  const savedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = React.useState(savedTheme || "light");

  // On mount or theme change, update the local storage
  useEffect(() => {
    localStorage.setItem("theme", theme);

    // Update the class based on the theme
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    console.log("Theme here is: ", theme);
  }, [theme]);

  // To toggle between dark and light mode
  const handleThemeChange = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  // FOR MODAL POPUP
  const [isModalOpen, setModalOpen] = useState(false);

  const handleIconHover = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleModalToggle = () => {
    setModalOpen(!isModalOpen); // Toggle the state
  };

  return (
    <div className="relative w-full h-[120px] overflow-x-hidden z-30">
      <div className="bg-[#8c6914] dark:bg-[#E9AB17] w-full h-[120px] fixed">
        <div className=" flex h-[10%] lg:h-[30%] ml-[80px] lg:ml-[125px] items-center md:justify-between pt-[56px] md:p-[56px]">
          {/* CONTAINER FOR TOP ITEMS  */}
          {/* LEFT ITEMS */}
          <div className="flex w-full flex-row justify-between">
            <div className="fixed flex top-10">
              <h1 className="text-lg md:text-4xl font-bold text-justify text-ebony items-center justify-center">
                {props.children}
              </h1>
            </div>
            {/* RIGHT ITEMS */}
            <div className="flex">
              <div className="fixed right-24 md:right-28 top-10 md:top-12 lg:right-24 lg:top-14">
                <ThemeModeBtn onClick={handleThemeChange} theme={theme}/>
              </div>
              <div
                onMouseEnter={handleIconHover}
                onMouseLeave={handleModalClose}
                onClick={handleModalToggle}
                className="fixed right-10 top-10"
              >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
