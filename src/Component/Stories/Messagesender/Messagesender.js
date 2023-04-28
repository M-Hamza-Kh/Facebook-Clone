import { TodoContext } from "../../Context/Context";
import React, { useState, useContext } from "react";
import "./Messagesender.css";

import { AiFillVideoCamera } from "react-icons/ai";
import { IoMdPhotos } from "react-icons/io";
import { FaRegLaugh } from "react-icons/fa";
import { AiTwotoneVideoCamera } from "react-icons/ai";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { firebaseApp } from "../../firebase";

// import 'firebase/compat/firestore';
// import {
//   collection,
//   getFirestore,
//   doc,
//   setDoc,
//   Timestamp,
// } from "firebase/firestore";

const Messagesender = () => {
  const date = new Date();

  // 👇️ 1/27/2022, 13:18:22
  console.log(
    date.toLocaleString("en-US", {
      hour12: false,
    })
  );
  const { state } = useContext(TodoContext);

  // const { getPosts } = useContext(TodoContext);
  // const db = getFirestore();
  const [statea, setstatea] = useState("");
  const [url, seturl] = useState("");
  const formhandler = (event) => {
    event.preventDefault();

    // Get a reference to the "posts" collection
    const postsRef = collection(getFirestore(firebaseApp), "posts");

    // Add a new document to the "posts" collection
    addDoc(postsRef, {
      postmessage: statea,
      profilename: state?.user?.displayName,
      profilepic: state?.user?.photoURL,
      timestamp: date.toLocaleString("en-US", {
        hour12: false,
      }),
      postpic: url,
    })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef?.id);
        // getPosts();
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });

    // Add a new document with a generated id.
    // const postdata = async () => {
    //   const docRef = await setDoc(doc(db, "data"), {
    //     message: state,
    //     timestamp: Timestamp.fromDate(new Date("December 10, 1815")),
    //     profilepic: "hhhhhhh",
    //     username: "jjjjjjjj",
    //   });
    //   console.log("Document written with ID: ", docRef);
    // };
    setstatea("");
    seturl("");
  };
  return (
    <>
      <div className=" messagesenderdiv   ">
        <div className="d-flex    align-items-center justify-content-around">
          <img
            src={state?.user?.photoURL}
            alt="none"
            className="messagesenderimg"
          ></img>
          <form onSubmit={formhandler} className=" input-form">
            <input
              className="input ps-2"
              placeholder="What's on your mind"
              value={statea}
              onChange={(e) => setstatea(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") formhandler(e); // submit the form when the Enter key is pressed
              }}
            ></input>
            <input
              className="url-input ps-2"
              placeholder="image URL "
              value={url}
              onChange={(e) => seturl(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") formhandler(e); // submit the form when the Enter key is pressed
              }}
            ></input>
          </form>
        </div>
        <div className=" d-flex justify-content-center w-100">
          <hr className="straightline"></hr>
        </div>
        <div className="d-flex justify-content-around">
          <div className="d-flex  align-items-center  justify-content-center items-div">
            <AiFillVideoCamera className="icons1" />
            <div className="text ps-2">Live vedio</div>
          </div>
          <div className="d-flex  align-items-center justify-content-center   items-div">
            <IoMdPhotos className="icons2" />

            <div className="text ps-2 ">Photo/video</div>
          </div>
          <div
            id="alert"
            className="d-flex align-items-center justify-content-center  items-div "
          >
            <FaRegLaugh className="icons3" />

            <div className="text ps-2 ">Feeling/activity</div>
          </div>
        </div>
      </div>
      <div className="create-room-div mt-2 ">
        <div className=" fonts-div  d-flex justify-content-center align-items-center ms-4">
          <AiTwotoneVideoCamera className="icon-font"></AiTwotoneVideoCamera>
          <p className="text-font  mb-0   ms-1">Create-room</p>
        </div>
      </div>
    </>
  );
};

export default Messagesender;
