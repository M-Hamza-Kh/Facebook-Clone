import React, { useContext } from "react";
import "./Login.css";
import facebookimage1 from "../../Assets/Facebook-logo.png";
import facebookimage2 from "../../Assets/Facebook-Logo (1).png";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { TodoContext } from "../Context/Context";

import { auth } from "../firebase.js";
const Login = () => {
  const { dispatch } = useContext(TodoContext);
  const googleSignInHandler = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        localStorage.setItem("token", result.user.accessToken);

        // Signed in
        dispatch({
          type: "user",
          user: result.user,
        });
        console.log(result);
        // const user = result.user;
        // console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // const Login = () => {
  //   const loginhandler = () => {
  //     signInWithEmailAndPassword(auth, email)
  //       .then((userCredential) => {
  //         // Signed in
  //         console.log(userCredential);
  //         // ...
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };
  return (
    <div className=" border d-flex justify-content-center  login-maindiv ">
      <div className="border w-100 text-center login-seconddiv">
        <img src={facebookimage1} className="  facebookimage1" alt="none"></img>
        <br></br>
        <img
          src={facebookimage2}
          className="   facebookimage2"
          alt="none"
        ></img>
        <br></br>
        <button className="login-button" onClick={googleSignInHandler}>
          Log in
        </button>
      </div>
    </div>
  );
};

export default Login;
