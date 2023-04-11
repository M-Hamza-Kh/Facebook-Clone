import React from "react";
import "./Story.css";
const Story = ({ bgimg, personpic, title, id }) => {
  return (
    <div
      id={id}
      className="story-maindiv mx-1"
      style={{
        backgroundImage: `url(${bgimg})`,

        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <img src={personpic} alt="none" className=" personpic"></img>

      <p className="story-title">{title}</p>
    </div>
  );
};

export default Story;
