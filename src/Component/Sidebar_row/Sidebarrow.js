import React from "react";
import "./Sidebarrow.css";
const Sidebarrow = ({ src, Icon, title, onClick, className }) => {
  return (
    <div
      className="sidebarrow-maindiv  border  d-flex align-items-center ms-1 mt-2"
      onClick={onClick}
    >
      {src && <img src={src} alt="none" className="img ms-1"></img>}
      {Icon && <Icon className={className} />}
      <div className="border ms-3">{title}</div>
    </div>
  );
};

export default Sidebarrow;
