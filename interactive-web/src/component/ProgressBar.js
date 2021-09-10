import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";
import "./ProgressBar.css";

const ProgressBar = ({ progress }) => {
  // const { url, progress } =  useStorage(file, title, desc, cat);
  // useEffect(() => {
  //     if (url) {
  //         setFile(null);
  //     }
  // }, [url, setFile])
  if (progress === 100) {
    return null;
  }
  return <div className="progress-bar" style={{ width: progress + "%" }}></div>;
};

export default ProgressBar;
