import React from "react";

const DownloadImage = ({ onClick }) => {
  return (
    <div>
      <button style={buttonStyle} onClick={onClick}>
        Bbox Image
      </button>
    </div>
  );
};

const buttonStyle = {
  padding: "10px",
  marginTop: "5px",
  marginRight: "5px",
  background: "#3A623F",
  color: "#FFF",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  width: "140px",
};

export default DownloadImage;
