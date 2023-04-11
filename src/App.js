import Header from "./Component/Header/Header";
import { useContext, useEffect, useState } from "react";
import Sidebar from "./Component/Sidebar/Sidebar";
import Feeds from "../src/Component/Feeds/Feeds";
import Rightbar from "./Component/Rightbar/Rightbar";
import "./App.css";
import Login from "./Component/Login/Login";
import { TodoContext } from "./Component/Context/Context";
function App() {
  const { state } = useContext(TodoContext);
  const [token, setToken] = useState(null);

  console.log("User login  hsdadjj", state?.user?.accessToken);
  console.log("image", state.user.photoURL);
  useEffect(() => {
    const myToken = localStorage.getItem("token");
    console.log("mymy", myToken);
    setToken(myToken);
  });

  return (
    <>
      {!(token === state?.user?.accessToken) ? (
        <Login></Login>
      ) : (
        <div>
          <Header></Header>
          <div className=" whole-area border ">
            <Sidebar></Sidebar>
            <Feeds></Feeds>
            <Rightbar></Rightbar>
          </div>
          <button
            onClick={() => {
              localStorage.removeItem("token");
              setToken(null);
            }}
          >
            Logout
          </button>
        </div>
      )}
    </>
  );
}

export default App;
