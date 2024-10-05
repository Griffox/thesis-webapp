import React, { useRef, useEffect, useState } from "react";

const ImageDisplay = ({
  selectedImage,
  imgData,
  radioBtnValue,
  onDetection,
  theme
}) => {
  const [detectionOccurred, setDetectionOccurred] = useState(false);
  const canvasRef = useRef(null);
  const MAX_WIDTH = 600; 
  const MAX_HEIGHT = 600; 

  // Effect to handle applying the theme class to the document
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // For refresh button
  const handleRefresh = () => {
    // Clear the canvas
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Optionally trigger detection occurrence change
    onDetection(false);
  };

  useEffect(() => {
    if (selectedImage && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      const img = new Image();
      img.src = selectedImage;
      img.onload = () => {
        let scale = Math.min(MAX_WIDTH / img.width, MAX_HEIGHT / img.height);
        if (scale > 1) scale = 1; // Original size if smaller than max dimensions

        const scaledWidth = img.width * scale;
        const scaledHeight = img.height * scale;

        canvas.width = scaledWidth;
        canvas.height = scaledHeight;
        ctx.drawImage(img, 0, 0, scaledWidth, scaledHeight);

        if (imgData && imgData.prediction) {
          imgData.prediction.forEach((item) => {
            const { x, y, width, height, class: className, confidence } = item;
            const x1 = x * scale - (width * scale) / 2;
            const y1 = y * scale - (height * scale) / 2;

            const text = `${className} (${(confidence * 100).toFixed(0)}%)`;
            ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
            ctx.fillRect(x1, y1 - 20, ctx.measureText(text).width + 8, 20);

            ctx.strokeStyle = "red";
            ctx.lineWidth = 2;
            ctx.strokeRect(x1, y1, width * scale, height * scale);

            ctx.font = "10px Arial";
            ctx.fillStyle = "white";
            ctx.fillText(text, x1 + 4, y1 - 5);
          });
        }
      };
    }
  }, [selectedImage, imgData]);

  // Use useEffect to call onDetection when detectionOccurred changes
  useEffect(() => {
    onDetection(detectionOccurred);
  }, [detectionOccurred, onDetection]);

  // Check for detection of cracks
  useEffect(() => {
    const isCracksDetected = imgData?.prediction?.some(
      (item) => item.class === "railway-breakages"
    );
    setDetectionOccurred(!!isCracksDetected);
  }, [imgData]);

  return (
    <div className="dark:bg-[#D5DEDE] mx-auto border-8 border-[#E9AB17] dark:border-customLightImageDisplay shadow-customImageDisplay">
      <div className="flex justify-between items-center p-4 text-ebony dark:text-active font-bold">
        <h1>Result:</h1>
        <button onClick={handleRefresh}>
          <svg
            width="37"
            height="32"
            viewBox="0 0 37 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 16C0 24.8356 7.10048 32 15.8571 32C20.0681 32 24.1029 30.3289 27.1333 27.3778L24.4905 24.7111C22.2529 27.1111 19.1343 28.4444 15.8571 28.4444C4.86286 28.4444 -0.634285 15.04 7.13571 7.2C14.9057 -0.639999 28.1905 4.92444 28.1905 16H22.9048L29.9524 23.1111H30.1286L37 16H31.7143C31.7143 7.16444 24.6138 0 15.8571 0C7.10048 0 0 7.16444 0 16Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      <canvas
        ref={canvasRef}
        className="w-full h-auto"
      />
    </div>
  );
};

export default ImageDisplay;
