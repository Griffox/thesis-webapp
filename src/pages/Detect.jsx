import NavBar from "../components/NavBar";
import UploadButton from "../components/UploadButton";
import RadioInput from "../components/RadioInput";
import InferenceButton from "../components/InferenceButton";
import React, { useState, useRef } from "react";
import ImageDisplay from "../components/ImageDisplay";
import axios from "axios";
import DownloadJSON from "../components/DownloadJSON";
import DownloadImage from "../components/DownloadImage";

// import { storage } from "../components/firebaseDB";

// Firebase Storage
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const Detect = () => {
  const [base64Image, setBase64Image] = useState(null);
  const [isInfering, setIsInfering] = useState(false); // To disable the inference button while infering
  const [bboxData, setBboxData] = useState(null); // Store the bbox data in a hook

  // upload to firebase
  //  const [imageUpload, setImageUpload] = useState();

  /*
  const uploadFile = () => {
    if (!imageUpload) return;
  // get the reference to the firebase storage using the selected image name
  const imageRef = ref(storage, `images/${imageUpload.name}`);

  // upload the file to the firebase storage
  uploadBytes(imageRef , imageUpload).then((snapshot) => {
    getDownloadURL(snapshot.ref).then((downloadURL) => {
      console.log("File available at", downloadURL);
          });
      });
  };
  */
  /*
  const handleImageChange = (event) => {
    const file = event.target.files[0];
  //  setSelectedImage(URL.createObjectURL(file));
  //   setImageUpload(file);
  };
  */

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const base64String = e.target.result;
        setBase64Image(base64String);
      };

      reader.readAsDataURL(file);
    }
  };

  const sendImageToAPI = async () => {
    if (base64Image) {
      axios({
        method: "POST",
        url: "https://detect.roboflow.com/railway-crack-detection/10",
        params: {
          api_key: "j4oHBD3msAlUlJvXwsHz",
        },
        data: base64Image,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
        .then(function (response) {
          // if may response, convert response.data to JSON
          const bboxData = JSON.stringify(response.data);
          setBboxData(response.data); // Store bboxData in state
          setConsoleData(response.data); // Store console data
          setIsInfering(true); // Enable the inference button
          console.log(bboxData);
        })
        .catch(function (error) {
          console.log(error.message);
        });
    } else {
      console.log("No valid image selected.");
    }
  };

  const [consoleData, setConsoleData] = useState([]); // To store console output

  // Reference to the canvas element for drawing bounding boxes
  const canvasRef = useRef(null);

  const handleConsoleSave = () => {
    // Create a Blob containing the consoleData as JSON
    const jsonData = JSON.stringify(consoleData, null, 2);
    const blob = new Blob([jsonData], { type: "application/json" });

    // Create a temporary link to trigger the download
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "console_output.json";
    a.click();
  };

  const handleImageSave = () => {
    // Get the canvas data as an image
    const canvas = canvasRef.current;
    const image = canvas.toDataURL("image/png");

    // Create a temporary link to trigger the download
    const a = document.createElement("a");
    a.href = image;
    a.download = "image_with_bboxes.png";
    a.click();
  };

  return (
    <div className="bg-custom-green h-screen font-custom">
      {/* NAV BAR  */}
      <NavBar />
      <div className="flex flex-row items-center justify-center">
        {/* LEFT SIDE  */}
        <ImageDisplay
          selectedImage={base64Image}
          drawLine={isInfering}
          bboxData={bboxData}
        />

        {/* RIGHT SIDE */}
        <div className="flex flex-col w-[45%] h-96 space-y-10 mt-24">
          {/* RADIO BTNS */}
          <RadioInput />

          {/* UPLOAD BUTTON */}
          <UploadButton onChange={handleFileChange} />

          {/* INFERENCE BUTTON */}
          <div className="w-[308px] h-[56px] absolute bottom-56">
            {/* <button onClick={sendImageToAPI}>Perform Inference</button> */}
            <InferenceButton onClick={sendImageToAPI} />
          </div>

          {/* Add buttons for saving the image and console output */}
          <div
            style={{
              color: "white",
            }}
          >
            <p>Download Inference Results:</p>
            <div style={{ display: "flex" }}>
              {/* Save Image with Bounding Boxes */}
              <DownloadImage onClick={handleImageSave} />

              <canvas ref={canvasRef} style={{ display: "none" }}></canvas>

              {/* Save Console Output */}
              <DownloadJSON consoleData={handleConsoleSave} />
            </div>
          </div>
        </div>

        <div className="flex w-max h-max absolute bottom-20 right-40 items-end justify-center">
          <p className="text-custom-white text-2xl">Model's Accuracy:</p>
          <div className="rounded-full w-[88px] h-[88px] bg-custom-bg-radio ml-4 border-[1px] border-solid border-custom-border">
            <p className="text-custom-text-orange font-bold text-3xl text-center my-6 mx-1">
              92%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detect;
