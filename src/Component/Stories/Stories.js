import React, { useContext } from "react";
import Story from "./Story";

import bgpic from "../../Assets/book-img.jpg";
import Messagesender from "./Messagesender/Messagesender";
import "./Stories.css";
import { TodoContext } from "../Context/Context";
const Stories = () => {
  const { state } = useContext(TodoContext);
  return (
    <>
      <div>
        <div className="d-flex    stories-maindiv">
          <Story
            bgimg={bgpic}
            personpic={state.user.photoURL}
            title={state.user.displayName}
          ></Story>
          <Story
            bgimg={bgpic}
            personpic={state.user.photoURL}
            title={state.user.displayName}
          ></Story>
          <Story
            bgimg={bgpic}
            personpic={state.user.photoURL}
            title={state.user.displayName}
          ></Story>
          <Story
            bgimg={bgpic}
            personpic={state.user.photoURL}
            title={state.user.displayName}
          ></Story>
          <Story
            bgimg={bgpic}
            id="last-story-image"
            personpic={state.user.photoURL}
            title={state.user.displayName}
          ></Story>
        </div>
        <Messagesender></Messagesender>
      </div>
    </>
  );
};

export default Stories;
