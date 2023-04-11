import { createContext, useReducer } from "react";

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

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {props.children}
    </TodoContext.Provider>
  );
};
export default TodoStateFunc;
