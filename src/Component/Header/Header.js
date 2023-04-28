import React, { useContext, useState } from "react";
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
import { IoLogOut } from "react-icons/io5";
import { TodoContext } from "../Context/Context";

const Header = ({ onClick }) => {
  const [open, setopen] = useState(false);

  const { state } = useContext(TodoContext);
  return (
    <div className="headerdiv  d-flex justify-content-between">
      {/* header left  */}
      <div className="header-left d-flex    py-1 ms-2 ">
        <img src={facebooklogo} alt="none" className="facebooklogo" />
        <div className="   search-input-div   rounded-pill ms-1">
          <IoIosSearch className="search-icon ms-2" />
          <input
            type="text"
            placeholder="Search Facebook"
            className="search-input  "
          />
        </div>
        <div className="search-icon-2">
          <IoIosSearch />
        </div>
        <div className="toggle-bar">
          <GiHamburgerMenu />
        </div>
        {/* <IoIosSearch></IoIosSearch> */}
      </div>
      {/* header middle  */}
      <div className="header-middle d-flex  justify-content-center w-50">
        <div className="header-middle-second-div d-flex  justify-content-around ">
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
      <div className="header-right   d-flex align-items-center justify-content-end  ">
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
            onClick={() => setopen(!open)}
          ></img>
          {open && (
            <div
              className="logout-button-div d-flex align-items-end"
              onClick={onClick}
            >
              <div className="logout-button-second-div d-flex  w-100 align-items-end">
                <IoLogOut className="logout-icon" />
                <p className="logou-para  ms-2 mb-0">Logout</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* end of header div */}
    </div>
  );
};

export default Header;
