import React from "react";
import { useEffect } from "react";

const InferenceButton = ({ onClick, theme }) => {
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
      <h1 className=" hidden lg:block font-bold text-[#a17202] mb-2">
        Run the system
      </h1>
      <button
        className="w-[215px] h-[56px] bg-customBackground dark:bg-customLightBackground border border-customBtn dark:border-customLightBorder shadow-customShadow dark:shadow-customLightShadow rounded-2xl text-base text-ebony transition active:translate-y-1"
        onClick={onClick}
      >
        Run Inference
      </button>
    </div>
  );
};

export default InferenceButton;
