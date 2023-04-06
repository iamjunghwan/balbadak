import React, { useEffect, useReducer, createContext } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { callApi } from "./config/callApi.js";
import "./App.css";
import EnrollPage from "./pages/EnrollPage";
import DetailPage from "./pages/DetailPage";
import EditPage from "./pages/EditPage";
import Main from "./pages/Main";

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

export const GlobalStateContext = createContext();
export const GlobalDispatchContext = createContext();

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
      const itemList = await callApi.get("/fileTest2");
      const byteCharacters = atob(itemList);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: "image/png" });
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        const base64data = reader.result;
        dispatch({ type: "INIT", data: base64data });
      };
    } catch (error) {
      console.log("error : " + error);
    }
  };

  const onEdit = (targetId, date, content, emotion) => {
    dispatch({
      type: "EDIT",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
  };

  return (
    <div className="App">
      <GlobalStateContext.Provider value={items}>
        <GlobalDispatchContext.Provider value={{ onEdit }}>
          <RouterProvider router={router} />
        </GlobalDispatchContext.Provider>
      </GlobalStateContext.Provider>
    </div>
  );
}

export default App;
