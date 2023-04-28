import React, { useContext } from "react";
import Stories from "../Stories/Stories.js";
// import profilepic from "../../../src/Assets/post-pic-2.avif";
// import postpic from "../../../src/Assets/pic.jpg";
import { TodoContext } from "../Context/Context.js";
import Posts from "../Posts/Posts.js";
import "./Feeds.css";
// import { getFirestore } from "firebase/firestore";
const Feeds = () => {
  // const [posts, setposts] = useState([]);/
  const { posts } = useContext(TodoContext);

  // const db = getFirestore();
  // const colRef = collection(db, "posts");

  // useEffect(() => {
  //   const getPosts = async () => {
  //     const docsSnap = await getDocs(collection(db, "posts"));
  //     // debugger;
  //     console.log("docsSnap : ", docsSnap?.docs);
  //     docsSnap?.docs.map((doc) => {
  //       console.log("My Doc : ", doc.data());
  //       return setposts(docsSnap?.docs);
  //     });
  //   };
  //   getPosts();
  // }, []);
  // console.log("My posts : ", posts);
  return (
    <div className=" d-flex justify-content-center feed-main-div">
      <div className=" feed-second-div">
        <Stories></Stories>

        {posts &&
          posts?.map((posts) => {
            console.log("Test ID", posts);

            return (
              <Posts
                key={posts?.id}
                profilepic={posts?.data().profilepic}
                profilename={posts?.data().profilename}
                timestamp={posts?.data().timestamp}
                postmessage={posts?.data().postmessage}
                postpic={posts?.data().postpic}
                // postpic={post.data.profilepic}
              ></Posts>
            );
          })}
        {/* <Posts
          key={posts?.id}
          profilepic={posts?.profilepic}
          profilename={posts?.profilename}
          timestamp={posts?.timestamp}
          postmessage={posts?.postmessage}
          postpic={posts?.postpic}
          // postpic={post.data.profilepic}
        ></Posts> */}

        {/* <Posts
          profilepic={postpic}
          profilename="hamza"
          timestamp="timestamp"
          postmessage="hello"
          postpic={profilepic}
        ></Posts>
        <Posts
          profilepic={postpic}
          profilename="hamza"
          timestamp="timestamp"
          postmessage="hello"
          postpic={profilepic}
        ></Posts>
        <Posts
          profilepic={postpic}
          profilename="hamza"
          timestamp="timestamp"
          postmessage="hello"
          postpic={profilepic}
        ></Posts> */}
      </div>
    </div>
  );
};

export default Feeds;
