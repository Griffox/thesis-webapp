import Sidebar from "../components/Sidebar";
import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import cabangisImg from "../assets/cabangis.jpg";
import malabananImg from "../assets/malabanan.png";
import reusImg from "../assets/reus.jpg";
import facebook from "../assets/facebook.svg";
import github from "../assets/github.svg";
import linkin from "../assets/linkin.svg";
import Header from "../components/Header";

const AboutUs = () => {
  const location = useLocation();

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

    console.log("Theme is: ", theme);
  }, [theme]);

  // To toggle between dark and light mode
  const handleThemeChange = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div className="bg-customBackground dark:bg-[#ffdc8a] w-full h-full pb-10 overflow-hidden">
      {/* SIDEBAR COMPONENT */}
      <Sidebar activePage={location.pathname} theme={theme} />
      <Header onThemeChange={handleThemeChange} theme={theme}>
        Varroa Mite Detection Developers
      </Header>

      <div className="w-full flex justify-center items-center mt-[50px] lg:mt-[35px] px-4">
        {/* CONTAINER FOR THE RECTANGLE  */}
        <div className="grid grid-flow-col scroll-auto gap-[5rem] overscroll-x-contain snap-mandatory snap-x overflow-y-hidden px-40">
          {/* CONTAINER FOR INDIVIDUAL RECTANGLE  */}
          <div className="w-[280px] md:w-[305px] h-[502px] flex flex-col bg-[#071017] dark:bg-customLightBackground dark:border-customLightBorder dark:shadow-customLightShadow border-4 border-solid border-[#E9AB17] shadow-[0_0_69px_3px_rgba(255,255,150,0.25)]">
            {/* CONTAINER FOR IMAGE  */}
            <div className="mt-[50px] flex justify-center">
              <img
                className="w-[200px] h-[200px] object-cover block"
                alt=""
                src={cabangisImg}
              />  
            </div>

            {/* CONTAINER FOR TEXT NAME */}
            <div className="inline-flex flex-col items-center relative mt-[30px]">
              <div className="relative w-fit mt-[-1.00px] font-bold text-ebony text-[32px] tracking-[0] leading-[normal]">
                CABANGIS
              </div>
              <div className="relative w-fit  font-bold text-ebony text-[16px] tracking-[0] leading-[normal]">
                ADRIAN CURTIS
              </div>
            </div>

            {/* CONTAINER FOR IMAGE FOOTER */}
            <div className="flex justify-center mt-[78px]">
              <div className="flex space-x-[40px]">
                <a
                  href="https://www.facebook.com/adriancabangis07"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-[32px] h-[32px] hover:scale-105 transition-transform"
                    alt="Facebook"
                    title="Go to Facebook Profile"
                    src={facebook}
                  />
                </a>
                <a
                  href="https://github.com/Griffox"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-[32px] h-[32px] hover:scale-105 transition-transform"
                    alt="GitHub"
                    title="Go to Github Profile"
                    src={github}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/adrian-curtis-cabangis-721274322/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-[29px] h-[32px] hover:scale-105 transition-transform"
                    alt="LinkedIn"
                    title="Go to LinkedIn Profile"
                    src={linkin}
                  />
                </a>
              </div>
            </div>
          </div>

          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
          {/* CONTAINER FOR INDIVIDUAL RECTANGLE  */}
          <div className="w-[280px] md:w-[305px] h-[502px] flex flex-col bg-[#071017] dark:bg-customLightBackground dark:border-customLightBorder dark:shadow-customLightShadow border-4 border-solid border-[#E9AB17] shadow-[0_0_69px_3px_rgba(255,255,150,0.25)]">
            {/* CONTAINER FOR IMAGE  */}
            <div className="mt-[50px] flex justify-center">
              <img
                className="w-[200px] h-[200px] object-cover block"
                alt=""
                src={malabananImg}
              />
            </div>

            {/* CONTAINER FOR TEXT NAME */}
            <div className="inline-flex flex-col items-center relative mt-[30px]">
              <div className="relative w-fit mt-[-1.00px] font-bold text-ebony text-[32px] tracking-[0] leading-[normal]">
                MALABANAN
              </div>
              <div className="relative w-fit  font-bold text-ebony text-[16px] tracking-[0] leading-[normal]">
                JOHN RUSSELLE
              </div>
            </div>

            {/* CONTAINER FOR IMAGE FOOTER */}
            <div className="flex justify-center mt-[78px]">
              <div className="flex space-x-[40px]">
                <a
                  href="https://www.facebook.com/adriancabangis07"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-[32px] h-[32px] hover:scale-105 transition-transform"
                    alt="Facebook"
                    title="Go to Facebook Profile"
                    src={facebook}
                  />
                </a>
                <a
                  href="https://github.com/Griffox"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-[32px] h-[32px] hover:scale-105 transition-transform"
                    alt="GitHub"
                    title="Go to Github Profile"
                    src={github}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/adrian-curtis-cabangis-721274322/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-[29px] h-[32px] hover:scale-105 transition-transform"
                    alt="LinkedIn"
                    title="Go to LinkedIn Profile"
                    src={linkin}
                  />
                </a>
              </div>
            </div>
          </div>

          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
          {/* CONTAINER FOR INDIVIDUAL RECTANGLE  */}
          <div className="w-[280px] md:w-[305px] h-[502px] flex flex-col bg-[#071017] dark:bg-customLightBackground dark:border-customLightBorder dark:shadow-customLightShadow border-4 border-solid border-[#E9AB17] shadow-[0_0_69px_3px_rgba(255,255,150,0.25)]">
            {/* CONTAINER FOR IMAGE  */}
            <div className="mt-[50px] flex justify-center">
              <img
                className="w-[200px] h-[200px] object-cover block"
                alt=""
                src={reusImg}
              />
            </div>

            {/* CONTAINER FOR TEXT NAME */}
            <div className="inline-flex flex-col items-center relative mt-[30px]">
              <div className="relative w-fit mt-[-1.00px] font-bold text-ebony text-[32px] tracking-[0] leading-[normal]">
                REUS
              </div>
              <div className="relative w-fit  font-bold text-ebony text-[16px] tracking-[0] leading-[normal]">
                ALLEAH
              </div>
            </div>

            {/* CONTAINER FOR IMAGE FOOTER */}
            <div className="flex justify-center mt-[78px]">
              <div className="flex space-x-[40px]">
                <a
                  href="https://www.facebook.com/adriancabangis07"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-[32px] h-[32px] hover:scale-105 transition-transform"
                    alt="Facebook"
                    title="Go to Facebook Profile"
                    src={facebook}
                  />
                </a>
                <a
                  href="https://github.com/Griffox"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-[32px] h-[32px] hover:scale-105 transition-transform"
                    alt="GitHub"
                    title="Go to Github Profile"
                    src={github}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/adrian-curtis-cabangis-721274322/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-[29px] h-[32px] hover:scale-105 transition-transform"
                    alt="LinkedIn"
                    title="Go to LinkedIn Profile"
                    src={linkin}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
