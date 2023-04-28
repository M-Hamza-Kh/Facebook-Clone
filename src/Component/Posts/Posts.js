import React from "react";
import "./Posts.css";
import { HiThumbUp } from "react-icons/hi";
import { BsChatSquare } from "react-icons/bs";
import { HiOutlineArrowUturnRight } from "react-icons/hi2";
import { IoMdArrowDropdown } from "react-icons/io";

const Posts = ({
  profilepic,
  profilename,
  timestamp,
  postmessage,
  postpic,
}) => {
  return (
    <div className="overall-post ">
      <div className="post-top d-flex align-items-center ms-2 ">
        <img src={profilepic} alt="none" className="post-profile-img"></img>
        <div className="post-top-info  ">
          <h3 className="post-profile-name">{profilename}</h3>
          <p className="post-profile-time">{timestamp}</p>
        </div>
      </div>
      <div className="post-message ms-2">{postmessage}</div>
      <div className="post-image  ">
        <img src={postpic} className="w-100 post-img" alt="none"></img>
      </div>
      <div className="post-line-div mt-3">
        <hr className="post-line"></hr>
      </div>
      <div className="d-flex justify-content-evenly mb-2">
        <div className="  post-fonts-div">
          <HiThumbUp className="post-fonts" />
          <p className="post-text mb-0 ps-2">Like</p>
        </div>
        <div className=" post-fonts-div ">
          <BsChatSquare className="post-fonts" />
          <p className="post-text mb-0  ps-2">Comment</p>
        </div>
        <div className=" post-fonts-div ">
          <HiOutlineArrowUturnRight className="post-fonts" />
          <p className="post-text mb-0  ps-2">Share</p>
        </div>
        <div className="  post-fonts-div2">
          <img src={profilepic} alt="none" className="post-profile-image"></img>
          <IoMdArrowDropdown />
        </div>
      </div>
    </div>
  );
};

export default Posts;
