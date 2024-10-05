import Sidebar from "../components/Sidebar";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ImageDisplay from "../components/ImageDisplayOther";
import UploadButton from "../components/UploadButton";
import InferenceButton from "../components/InferenceButton";
import Header from "../components/Header";

const VarroaResNet50 = () => {
  // State for base64 image
  const [base64Image, setBase64Image] = useState(null);

  // State for inference status
  const [isInfering, setIsInfering] = useState(false);

  // State for image data from API
  const [imgData, setImgData] = useState(null);

  const location = useLocation();

  // Read the theme from local storage on component mount
  const savedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(savedTheme || "light");

  // On mount or theme change, update the local storage
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  // Handle image file change and convert it to base64
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setBase64Image(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  // Function to send image to API
  const sendImageToAPI = async () => {
    const url = "";
    const formData = new FormData();
    formData.append("file", base64Image); // Use base64Image directly

    try {
      setIsInfering(true);
      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setImgData(data);
      console.log(data);
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setIsInfering(false);
    }
  };

  // Dummy function for onDetection, replace as needed
  const handleDetection = (value) => {
    console.log("Detection Occurred:", value);
  };

  // To toggle between dark and light mode
  const handleThemeChange = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div className="flex flex-col w-full h-full bg-customBackground dark:bg-[#ffdc8a] overflow-x-hidden">
      {/* SIDEBAR COMPONENT */}
      <Sidebar activePage={location.pathname} theme={theme} />
      <Header onThemeChange={handleThemeChange} theme={theme}>
        Varroa Mite Detection / ResNet50
      </Header>

      {/* CONTAINER FOR BUTTONS */}
      <div className="flex flex-col lg:flex-row justify-center lg:space-x-[100px] items-center z-10 mx-6 mt-6">
        <div className="order-1 mb-[48px]">
          <UploadButton onChange={handleFileChange} theme={theme} />
        </div>

        <div className="order-2 mb-[48px]">
          <InferenceButton onClick={sendImageToAPI} theme={theme} />
        </div>

        {/* MOBILE VERSION */}
        <div className="order-3 lg:hidden mb-8">
          <div className="flex w-screen h-fit mb-2 overflow-x-hidden z-0">
            <ImageDisplay
              selectedImage={base64Image}
              imgData={imgData}
              drawLine={isInfering}
              onDetection={handleDetection}
              theme={theme}
            />
          </div>
        </div>
      </div>

      {/* DESKTOP VERSION */}
      <div className="hidden lg:flex w-screen h-fit mb-2 overflow-x-hidden z-0 px-4">
        <ImageDisplay
          selectedImage={base64Image}
          imgData={imgData}
          drawLine={isInfering}
          onDetection={handleDetection}
          theme={theme}
        />
      </div>
    </div>
  );
};

export default VarroaResNet50;