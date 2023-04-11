import React, { useContext } from "react";
import facebooklogo from "../../Assets/Facebooklogo.svg.webp";
import "./Header.css";
import { IoIosSearch } from "react-icons/io";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineSubscriptions } from "react-icons/md";
import { IoStorefrontOutline } from "react-icons/io5";
import { MdSupervisedUserCircle } from "react-icons/md";
import { FaGamepad } from "react-icons/fa";
import { CgMenuGridO } from "react-icons/cg";
import { FaFacebookMessenger } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { TodoContext } from "../Context/Context";
const Header = () => {
  const { state } = useContext(TodoContext);
  return (
    <div className="headerdiv border d-flex justify-content-between border-dark">
      {/* header left  */}
      <div className="header-left d-flex  border border-dark   py-1 ms-2 ">
        <img src={facebooklogo} alt="none" className="facebooklogo" />
        <div className="   search-input-div   rounded-pill ms-1">
          <IoIosSearch className="search-icon ms-2" />
          <input
            type="text"
            placeholder="Search Facebook"
            className="search-input border "
          />
        </div>
        <div className="border search-icon-2">
          <IoIosSearch />
        </div>
        <div className="toggle-bar">
          <GiHamburgerMenu />
        </div>
        {/* <IoIosSearch></IoIosSearch> */}
      </div>
      {/* header middle  */}
      <div className="header-middle d-flex border border-dark justify-content-center w-50">
        <div className="header-middle-second-div d-flex border justify-content-around ">
          <div className="middle-items  middleitems-1 ">
            <AiFillHome />
          </div>
          <div className="middle-items">
            <MdOutlineSubscriptions />
          </div>
          <div className="middle-items">
            <IoStorefrontOutline />
          </div>
          <div className="middle-items">
            <MdSupervisedUserCircle />
          </div>
          <div className="middle-items">
            <FaGamepad />
          </div>
        </div>
      </div>
      {/* header right  */}
      <div className="header-right  border  d-flex align-items-center justify-content-end  ">
        <div className="header-right-items  ">
          <CgMenuGridO />
        </div>
        <div className="header-right-items   ">
          <FaFacebookMessenger />
        </div>
        <div className="header-right-items  ">
          <IoMdNotifications />
        </div>
        <div className="header-right-items ">
          <img
            src={state.user.photoURL}
            className="facebooklogo2"
            alt="none"
          ></img>
        </div>
      </div>

      {/* end of header div */}
    </div>
  );
};

export default Header;
