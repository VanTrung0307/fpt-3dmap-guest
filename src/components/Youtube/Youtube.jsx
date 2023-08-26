/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React from "react";
import { SectionWrapper } from "../../hoc";
import YouTube from "react-youtube";
import "./Youtube.css";

const Youtube = () => {
  const opts = {
    height: "400",
    width: "700",
    playerVars: {
      modestbranding: 1, // Hide YouTube branding
    },
  };

  return (
    <div className="pl-[90px] mt-[-70px]">
      <div className="video-container">
        <YouTube opts={opts} videoId="kNgZ4VMmXdo" />
      </div>
      <span className="text-[#fff] ml-[200px]">
        Video hướng dẫn về Cách chơi & Hệ thống
      </span>
    </div>
  );
};

export default SectionWrapper(Youtube, "system");
