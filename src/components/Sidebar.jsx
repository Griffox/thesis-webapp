import React, { useState, useEffect } from "react";
import { Menu, ChevronLeft} from "react-feather";
import { NavLink } from "react-router-dom";
import homeIcon from "../assets/homeIcon.png";

const Sidebar = ({ activePage, theme }) => {
  const [isCollapsible, setIsCollapsible] = useState(true);

  // Effect to handle applying the theme class to the document
  useEffect(() => {
    console.log("Theme changed:", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleCollapsible = () => {
    setIsCollapsible(!isCollapsible);
  };

  // FUNCTION FOR RENDERING THE TITLE OF THE SIDEBAR AND THE RIGHT ICON (MENU OR ARROW)
  const renderTitle = () => {
    if (isCollapsible) {
      return (
        <div className="cursor-pointer mt-10 ml-8" onClick={toggleCollapsible}>
          {isCollapsible ? (
            <Menu size={30} color="white" />
          ) : (
            <ChevronLeft size={30} color="white" />
          )}
        </div>
      );
    } else {
      return (
        <div className="flex rounded-tr-customSidebar">
          <div className="w-[80%] text-ebony text-left text-shadow-md text-2xl font-bold mt-9 ml-6">
          <NavLink to="/">VARROA MITE DETECTION</NavLink>
          </div>
          <div
            className="w-[20%] flex justify-end cursor-pointer text-center mt-10 mr-8"
            onClick={toggleCollapsible}
          >
            {isCollapsible ? (
              <Menu size={30} color="white" />
            ) : (
              <ChevronLeft size={30} color="white" />
            )}
          </div>
        </div>
      );
    }
  };

  return (
    <div className="fixed h-full z-50">
      <div
        className={`flex flex-col h-full bg-[#a17202] dark:bg-customBackground text-white z-50 ${
          isCollapsible ? "w-0" : "w-[275px]"
        } transition-all duration-500 ease-out`}
      >
        {/* FOR RENDERING THE TITLE COMPONENT */}
        <div className="rounded-tr-customSidebar">
          {renderTitle()}
        </div>

        <div className="text-base text-ebony mt-14">
          {!isCollapsible && (
            <>
              {/* LINK FOR YOLOV7 MODEL */}
              <div
                className={
                  activePage === "/YOLOv7"
                    ? "flex flex-grow h-[64px] items-center bg-customActiveOption p-2 cursor-pointer"
                    : "flex flex-grow h-[64px] items-center p-2 cursor-pointer"
                }
              >
                <h1
                  className={
                    activePage === "/YOLOv7"
                      ? "text-active ml-[40px] font-bold"
                      : "text-ebony ml-[40px] font-bold"
                  }
                >
                  <NavLink to={"/YOLOv7"}>YOLOv7</NavLink>
                </h1>
              </div>
              {/* LINK FOR YOLOV8 MODEL */}
              <div
                className={
                  activePage === "/YOLOv8"
                    ? "flex flex-grow h-[64px] items-center bg-customActiveOption p-2 cursor-pointer"
                    : "flex flex-grow h-[64px] items-center p-2 cursor-pointer"
                }
              >
                <h1
                  className={
                    activePage === "/YOLOv8"
                      ? "text-active ml-[40px] font-bold"
                      : "text-ebony ml-[40px] font-bold"
                  }
                >
                  <NavLink to={"/YOLOv8"}>YOLOv8</NavLink>
                </h1>
              </div>

              {/* LINK FOR YOLOV9 MODEL */}
              <div
                className={
                  activePage === "/YOLOv9"
                    ? "flex flex-grow h-[64px] items-center bg-customActiveOption p-2 cursor-pointer"
                    : "flex flex-grow h-[64px] items-center p-2 cursor-pointer"
                }
              >
                <h1
                  className={
                    activePage === "/YOLOv9"
                      ? "text-active ml-[40px] font-bold"
                      : "text-ebony ml-[40px] font-bold"
                  }
                >
                  <NavLink to={"/YOLOv9"}>YOLOv9</NavLink>
                </h1>
              </div>

              {/* LINK FOR YOLOV10 MODEL */}
              <div
                className={
                  activePage === "/YOLOv10"
                    ? "flex flex-grow h-[64px] items-center bg-customActiveOption p-2 cursor-pointer"
                    : "flex flex-grow h-[64px] items-center p-2 cursor-pointer"
                }
              >
                <h1
                  className={
                    activePage === "/YOLOv10"
                      ? "text-active ml-[40px] font-bold"
                      : "text-ebony ml-[40px] font-bold"
                  }
                >
                  <NavLink to={"/YOLOv10"}>YOLOv10</NavLink>
                </h1>
              </div>

              {/* LINK FOR VGG16 MODEL */}
              <div
                className={
                  activePage === "/vgg16"
                    ? "flex flex-grow h-[64px] items-center bg-customActiveOption p-2 cursor-pointer"
                    : "flex flex-grow h-[64px] items-center p-2 cursor-pointer"
                }
              >
                
                <h1
                  className={
                    activePage === "/vgg16"
                      ? "text-active ml-[40px] font-bold"
                      : "text-ebony ml-[40px] font-bold"
                  }
                >
                  <NavLink to={"/vgg16"}>VGG16</NavLink>
                </h1>
              </div>

              {/* LINK FOR INCEPTIONV3 MODEL */}
              <div
                className={
                  activePage === "/inceptionv3"
                    ? "flex flex-grow h-[64px] items-center bg-customActiveOption p-2 cursor-pointer"
                    : "flex flex-grow h-[64px] items-center p-2 cursor-pointer"
                }
              >
                <h1
                  className={
                    activePage === "/inceptionv3"
                      ? "text-active ml-[40px] font-bold"
                      : "text-ebony ml-[40px] font-bold"
                  }
                >
                  <NavLink to={"/inceptionv3"}>InceptionV3</NavLink>
                </h1>
              </div>

              {/* LINK FOR RESNET50 MODEL */}
              <div
                className={
                  activePage === "/resnet50"
                    ? "flex flex-grow h-[64px] items-center bg-customActiveOption p-2 cursor-pointer"
                    : "flex flex-grow h-[64px] items-center p-2 cursor-pointer"
                }
              >
                <h1
                  className={
                    activePage === "/resnet50"
                      ? "text-active ml-[40px] font-bold"
                      : "text-ebony ml-[40px] font-bold"
                  }
                >
                  <NavLink to={"/resnet50"}>ResNet50</NavLink>
                </h1>
              </div>

              {/* LINK FOR ABOUT US */}
              <div
                className={
                  activePage === "/aboutus"
                    ? "flex flex-grow h-[64px] items-center bg-customActiveOption p-2 cursor-pointer"
                    : "flex flex-grow h-[64px] items-center p-2 cursor-pointer"
                }
              >
                <h1
                  className={
                    activePage === "/aboutus"
                      ? "text-active ml-[40px] font-bold"
                      : "text-ebony ml-[40px] font-bold"
                  }
                >
                  <NavLink to={"/aboutus"}>About Us</NavLink>
                </h1>
              </div>

              {/* LINK FOR HOME */}
              <div className="flex h-[310px] rounded-br-3xl items-end justify-end ">
                <NavLink to={"/"}>
                  <img
                    src={homeIcon}
                    alt="home"
                    className="w-[32px] h-[32px] justify-end mr-6"
                  />
                </NavLink>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
