import Sidebar from "../components/Sidebar";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import UploadButton from "../components/UploadButton";
import InferenceButton from "../components/InferenceButton";
import ImageDisplay from "../components/ImageDisplayYOLO";
import axios from "axios";
import Header from "../components/Header";
import ModelSelect from "../components/ModelSelect";

const VarroaYOLOv9 = () => {
  const [base64Image, setBase64Image] = useState(null);
  const [isInfering, setIsInfering] = useState(false);
  const [bboxData, setBboxData] = useState(null);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const location = useLocation();

  // Handle image file change and convert it to base64
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setBase64Image(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  // Send the image to the API and set bounding box data
  const sendImageToAPI = async () => {
    if (base64Image) {
      setIsInfering(true);
      axios({
        method: "POST",
        url: "https://detect.roboflow.com/varroadetection_2/1", 
        params: { 
          api_key: "fTWiDBcttFoP5JmC2p5u", 
          confidence: 0.10, },
        data: base64Image,
        headers: { 
          "Content-Type": "application/x-www-form-urlencoded" 
        },
      })
        .then((response) => {
          console.log(response.data);
          setBboxData(response.data);
        })
        .catch((error) => {
          console.log("Error:", error.message);
        })
        .finally(() => setIsInfering(false));
    } else {
      console.log("No valid image selected.");
    }
  };

  // Toggle theme between light and dark mode
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const handleThemeChange = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <div className="flex flex-col w-full h-full bg-customBackground dark:bg-[#ffdc8a] overflow-x-hidden">
      {/* SIDEBAR COMPONENT */}
      <Sidebar activePage={location.pathname} theme={theme} />
      <Header onThemeChange={handleThemeChange} theme={theme}>
        Varroa Mite Detection / YOLOv9
      </Header>

      {/* CONTAINER FOR BUTTONS */}
      <div className="flex flex-col lg:flex-row justify-center lg:space-x-[100px] items-center z-10 mx-6 mt-6">
        <div className="order-1 mb-[48px]">
          <UploadButton onChange={handleFileChange} theme={theme} />
        </div>

        <div className="order-2 mb-[48px]">
          <ModelSelect onClick={ModelSelect} theme={theme} />
        </div>

        <div className="order-2 mb-[48px]">
          <InferenceButton onClick={sendImageToAPI} theme={theme} />
        </div>

        {/* MOBILE VERSION */}
        <div className="order-3 lg:hidden mb-8">
          <div className="flex w-screen h-fit mb-2 overflow-x-hidden z-0">
            <ImageDisplay
              selectedImage={base64Image}
              drawLine={isInfering}
              bboxData={bboxData}
              radioBtnValue="image"
              onDetection={() => {}}
              theme={theme}
            />
          </div>
        </div>
      </div>

      {/* DESKTOP VERSION */}
      <div className="hidden lg:flex w-screen h-fit mb-2 overflow-x-hidden z-0 px-4">
        <ImageDisplay
          selectedImage={base64Image}
          drawLine={isInfering}
          bboxData={bboxData}
          radioBtnValue="image"
          onDetection={() => {}}
          theme={theme}
        />
      </div>
    </div>
  );
};

export default VarroaYOLOv9;
