import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ModelSelect = ({ theme }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleModelChange = (e) => {
    const selectedModel = e.target.value;
    navigate(`/${selectedModel}`);
  };

  return (
    <div className="flex flex-col">
      <h1 className="hidden lg:block font-bold text-[#a17202] mb-2">Select Model</h1>
      <select
        className="w-[215px] h-[56px] bg-customBackground dark:bg-customLightBackground border border-customBtn dark:border-customLightBorder shadow-customShadow dark:shadow-customLightShadow rounded-2xl text-base text-ebony transition"
        onChange={handleModelChange}
      >
        <option value="yolov7">YOLOv7</option>
        <option value="yolov8">YOLOv8</option>
        <option value="yolov9">YOLOv9</option>
        <option value="yolov10">YOLOv10</option>
        <option value="inceptionv3">InceptionV3</option>
        <option value="resnet50">ResNet50</option>
        <option value="vgg16">VGG16</option>
      </select>
    </div>
  );
};

export default ModelSelect;
