import React, { useEffect, useReducer, createContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { callApi } from "./config/callApi.js";
import "./App.css";
import EnrollPage from "./pages/EnrollPage";
import DetailPage from "./pages/DetailPage";
import EditPage from "./pages/EditPage";
import Main from "./pages/Main";

//기존 값 state , 변경값 action (data,type);
const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }

    case "EDIT": {
      newState = state.map((it) =>
        it.id === action.data.id ? { ...action.data } : it
      );
      break;
    }
    default:
      return state;
  }

  return newState;
};

export const GlobalStateContext = createContext("");
export const GlobalDispatchContext = createContext({});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <></>,
  },
  {
    path: "/enroll",
    element: <EnrollPage />,
  },
  {
    path: "/detail",
    element: <DetailPage />,
  },
  {
    path: "/edit/:id",
    element: <EditPage />,
  },
]);

function App() {
  //저장할 값 , dispatch
  const [items, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    fncItemlist();
  }, []);

  const fncItemlist = async () => {
    try {
      const itemList: [] = await callApi.get("/fileTest3");
      dispatch({ type: "INIT", data: itemList });
    } catch (error) {
      console.log("error : " + error);
    }
  };
  const onInit = (id, editContent) => {
    dispatch({ type: "INIT", data: { id: id, itemContent: editContent } });
  };

  const onEdit = (id, editContent) => {
    dispatch({
      type: "EDIT",
      data: {
        id: id,
        itemContent: editContent,
      },
    });
  };

  return (
    <div className="App">
      <GlobalStateContext.Provider value={items}>
        <GlobalDispatchContext.Provider value={{ onInit, onEdit }}>
          <RouterProvider router={router} />
        </GlobalDispatchContext.Provider>
      </GlobalStateContext.Provider>
    </div>
  );
}

export default App;
