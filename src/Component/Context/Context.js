import { createContext, useReducer, useState, useEffect } from "react";

import { getFirestore, collection, getDocs } from "firebase/firestore";

export const TodoContext = createContext();

const initialState = { user: "" };
const reducer = (state, action) => {
  if (action.type === "user") {
    return {
      ...state,
      user: action.user,
    };
  } else {
    return state;
  }
};

const TodoStateFunc = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [posts, setposts] = useState([]);
  const db = getFirestore();

  const getPosts = async () => {
    const docsSnap = await getDocs(collection(db, "posts"));
    // debugger;
    console.log("docsSnap : ", docsSnap?.docs);
    docsSnap?.docs.map((doc) => {
      console.log("My Doc : ", doc.data());
      return setposts(docsSnap?.docs);
    });
  };

  useEffect(() => {
    getPosts();
  }, [posts]);

  return (
    <TodoContext.Provider value={{ state, dispatch, getPosts, posts }}>
      {props.children}
    </TodoContext.Provider>
  );
};
export default TodoStateFunc;
