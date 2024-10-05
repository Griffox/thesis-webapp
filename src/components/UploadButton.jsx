import React from "react";
import { useEffect } from "react";

const UploadButton = ({ onChange, theme }) => {
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
      <label htmlFor="picture" className=" font-bold text-[#a17202]">
        Upload a file:
      </label>
      <input
        id="picture"
        type="file"
        accept="image/*"
        className="flex w-[272px] h-[40px] lg:h-[56px] lg:w-[326px] mt-2 bg-customBackground dark:bg-customLightBackground border border-customBtn dark:border-[#ffff] shadow-customShadow dark:shadow-customLightShadow text-base text-ebony file:h-full file:border file:border-customFile dark:file:border-[#ffff] file:bg-customBackground dark:file:bg-customLightBackground file:border-l-0 file:border-t-0 file:border-r-2 file:text-ebony file:font-bold"
        onChange={onChange} // Call the provided function on change
      />
    </div>
  );
};

export default UploadButton;
