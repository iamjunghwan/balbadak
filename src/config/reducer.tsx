import React, { useEffect, useReducer, createContext } from "react";

//기존 값 state , 변경값 action (data,type);
const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }

    case "EDIT": {
      break;
    }
    default:
      return state;
  }

  return newState;
};

const GlobalStateContext = createContext("");
const GlobalDispatchContext = createContext({});

export { reducer, GlobalStateContext, GlobalDispatchContext };
