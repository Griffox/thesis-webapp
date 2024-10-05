import React, { useEffect } from "react";

const ModelSelect = ({ onChange, theme }) => {
  // Effect to handle applying the theme class to the document
  useEffect(() => {
    console.log("Theme changed:", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="flex flex-col">
      <h1 className="hidden lg:block font-bold text-[#a17202] mb-2">
        Select Model
      </h1>
      <select
        className="w-[215px] h-[56px] bg-customBackground dark:bg-customLightBackground border border-customBtn dark:border-customLightBorder shadow-customShadow dark:shadow-customLightShadow rounded-2xl text-base text-ebony transition"
        onChange={onChange}
      >
        <option value="cv1">Computer Vision Model 1</option>
        <option value="cv2">Computer Vision Model 2</option>
        <option value="cv3">Computer Vision Model 3</option>
        {/* Add more options as needed */}
      </select>
    </div>
  );
};

export default ModelSelect;
