import { createContext } from "react";

//기존 값 state , 변경값 action (data,type);
const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }

    default:
      return state;
  }
};

const GlobalStateContext = createContext("");
const GlobalDispatchContext = createContext({});

export { reducer, GlobalStateContext, GlobalDispatchContext };
