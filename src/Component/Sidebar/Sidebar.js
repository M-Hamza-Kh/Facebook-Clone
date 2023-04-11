import React, { useContext, useState } from "react";
import "./Sidebar.css";
import Sidebarrow from "../../Component/Sidebar_row/Sidebarrow";

import market from "../../Assets/marketplace.svg";
import { FaUserFriends } from "react-icons/fa";
import { MdRecentActors } from "react-icons/md";
import { MdGroups2 } from "react-icons/md";
import { IoTvSharp } from "react-icons/io5";
import { FcClock } from "react-icons/fc";
import { TfiSave } from "react-icons/tfi";
import { TbSpeakerphone } from "react-icons/tb";
import { FcSalesPerformance } from "react-icons/fc";
import { BsDropletFill } from "react-icons/bs";
import { BsTreeFill } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { TodoContext } from "../Context/Context";

const Sidebar = (props) => {
  const { state } = useContext(TodoContext);
  const [toggle, settoggle] = useState(false);
  const clickhandler = () => {
    console.log("hhhh");
    settoggle(!toggle);
  };
  return (
    <div className="sidebar-div border border-dark pt-4 ps-1">
      <Sidebarrow
        src={state.user.photoURL}
        title={state.user.displayName}
      ></Sidebarrow>

      <Sidebarrow
        Icon={FaUserFriends}
        className="friendsicon "
        title="Friends"
      ></Sidebarrow>

      <Sidebarrow
        Icon={MdRecentActors}
        title="Most recent"
        className="friendsicon "
      ></Sidebarrow>
      <Sidebarrow
        Icon={MdGroups2}
        title="Groups"
        className="friendsicon "
      ></Sidebarrow>
      <Sidebarrow src={market} title="Market place"></Sidebarrow>
      <Sidebarrow
        Icon={IoTvSharp}
        title="Watch"
        className="friendsicon "
      ></Sidebarrow>
      <Sidebarrow
        Icon={FcClock}
        title="Memories"
        className="friendsicon "
      ></Sidebarrow>
      <Sidebarrow
        Icon={TfiSave}
        title="Saved"
        className="friendsicon "
      ></Sidebarrow>
      {toggle && (
        <Sidebarrow
          Icon={TbSpeakerphone}
          title="saved"
          className="friendsicon "
        ></Sidebarrow>
      )}
      {toggle && (
        <Sidebarrow
          Icon={FcSalesPerformance}
          title="saved"
          className="friendsicon "
        ></Sidebarrow>
      )}
      {toggle && (
        <Sidebarrow
          Icon={BsDropletFill}
          title="saved"
          className="friendsicon "
        ></Sidebarrow>
      )}
      {toggle && (
        <Sidebarrow
          Icon={BsTreeFill}
          title="saved"
          className="friendsicon "
        ></Sidebarrow>
      )}
      <Sidebarrow
        Icon={toggle ? IoIosArrowDropupCircle : IoMdArrowDropdown}
        title={toggle ? "see less" : "see more"}
        onClick={clickhandler}
        className="friendsicon "
      ></Sidebarrow>
      <hr className="line ms-1 mt-2"></hr>
      <p className="ms-1 font">Your shortcuts</p>

      <Sidebarrow
        Icon={FaUserFriends}
        title="League of Angels III"
        className="friendsicon "
      ></Sidebarrow>
      <Sidebarrow
        src={state.user.photoURL}
        title={state.user.displayName}
      ></Sidebarrow>
      <Sidebarrow
        Icon={MdRecentActors}
        title="Texas Hold Em poker"
        className="friendsicon "
      ></Sidebarrow>
    </div>
  );
};

export default Sidebar;
