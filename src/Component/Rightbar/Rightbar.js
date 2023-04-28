import React from "react";
import "./Rightbar.css";
import { BsThreeDots } from "react-icons/bs";
const Rightbar = ({ onClick }) => {
  return (
    <div className=" rightbar-main-div">
      <div className="  d-flex justify-content-between align-items-center">
        <p className="right-bar-para">Your pages and profile</p>
        <BsThreeDots className="right-bar-font " />
      </div>
    </div>
  );
};

export default Rightbar;
