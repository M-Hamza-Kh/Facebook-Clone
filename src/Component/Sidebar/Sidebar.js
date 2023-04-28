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
    <div className="sidebar-div  pt-4 ps-1">
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
        className="actorssicon "
      ></Sidebarrow>
      <Sidebarrow
        Icon={MdGroups2}
        title="Groups"
        className="groupsicon "
      ></Sidebarrow>
      <Sidebarrow src={market} title="Market place"></Sidebarrow>
      <Sidebarrow
        Icon={IoTvSharp}
        title="Watch"
        className="watchicon "
      ></Sidebarrow>
      <Sidebarrow
        Icon={FcClock}
        title="Memories"
        className="memoriesicon "
      ></Sidebarrow>
      <Sidebarrow
        Icon={TfiSave}
        title="Recent Ad"
        className="savedicon "
      ></Sidebarrow>
      {toggle && (
        <Sidebarrow
          Icon={TbSpeakerphone}
          title="Ad Center"
          className="speakericon "
        ></Sidebarrow>
      )}
      {toggle && (
        <Sidebarrow
          Icon={FcSalesPerformance}
          title="saved"
          className="salessicon "
        ></Sidebarrow>
      )}
      {toggle && (
        <Sidebarrow
          Icon={BsDropletFill}
          title="Blood Donations"
          className="savedicon "
        ></Sidebarrow>
      )}
      {toggle && (
        <Sidebarrow
          Icon={BsTreeFill}
          title="Climate Change"
          className="treeicon "
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
        className="usericon "
      ></Sidebarrow>
      <Sidebarrow
        src={state.user.photoURL}
        title={state.user.displayName}
      ></Sidebarrow>
      <Sidebarrow
        Icon={MdRecentActors}
        title="Texas Hold Em poker"
        className="recenticon "
      ></Sidebarrow>
    </div>
  );
};

export default Sidebar;
