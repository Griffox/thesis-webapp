import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomePageButton from "../components/HomePageButton";
import bee from "../assets/bee.png";
import ThemeModeBtn from "../components/ThemeModeBtn";

function HomePage() {
  // Manage theme state and persist it in local storage
  const savedTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(savedTheme);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // Toggle between light and dark mode
  const handleThemeChange = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen font-Helvetica relative dark:bg-customLightBackground">
      {/* Bee Icon Section on the left (2/5 of the screen) */}
      <div className="w-full lg:w-2/5 flex justify-center items-center dark:bg-customLightBackground">
        <div className="flex justify-center items-center h-full">
          <img src={bee} alt="bee" className="w-[250px] lg:w-[300px] h-auto" />
        </div>
      </div>

      {/* Text Section on the right (3/5 of the screen) */}
      <div className="w-full lg:w-3/5 px-5 lg:px-16 pt-[20px] lg:pt-[150px]">
        <div className="relative">
          {/* Theme toggle button positioned at top-right */}
          <div className="absolute top-0 right-0 mt-5 mr-5">
            <ThemeModeBtn onClick={handleThemeChange} theme={theme} />
          </div>

          {/* Title Section */}
          <h2 className="text-left text-[#EBEBEB] font-bold text-base md:text-2xl leading-normal lg:text-4xl">
            DETECTION OF
          </h2>

          <h1 className="text-left text-[#EBEBEB] drop-shadow-2xl font-bold leading-none text-4xl md:text-6xl lg:text-[80px] pb-4 lg:pb-4 tracking-widest">
            VARROA MITE
          </h1>

          {/* Description Paragraph */}
          <div className="text-justify text-base md:text-lg lg:text-xl w-full lg:w-[90%]">
            <p className="text-[#EBEBEB] font-bold pb-4 tracking-widest">
              Varroa Mite Detection on Apis Mellifera Beehives
            </p>
            <p className="text-[#EBEBEB] text-sm md:text-lg leading-normal lg:pb-10">
              Our platform provides an intuitive solution for detecting and reporting varroa mite infestations in Apis mellifera beehives. By simply uploading an image, you can leverage advanced model-based technology to accurately identify the presence of varroa mites and assess their impact on bee health. Join us in our mission to protect bee populations and promote responsible beekeeping. Together, we can ensure the survival of our hives and enhance the health of these vital pollinators, contributing to a more sustainable environment.
            </p>
          </div>

          {/* Get Started Button */}
          <div className="w-full flex justify-start items-center pb-9">
            <Link to="/YOLOv8">
              <HomePageButton>Get Started</HomePageButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
