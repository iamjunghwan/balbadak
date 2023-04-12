import React, { useEffect, useReducer, createContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { callApi } from "./config/callApi.js";
import "./App.css";
import EnrollPage from "./pages/EnrollPage";
import DetailPage from "./pages/DetailPage";
import EditPage from "./pages/EditPage";
import Main from "./pages/Main";
import {
  reducer,
  GlobalStateContext,
  GlobalDispatchContext,
} from "./config/reducer";

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
      const itemList: [] = await callApi.get("/file/FileArrAPI");
      dispatch({ type: "INIT", data: itemList });
    } catch (error) {
      console.log("error : " + error);
    }
  };
  const onInit = (itemId, editContent) => {
    dispatch({
      type: "INIT",
      data: { itemFileId: itemId, itemContent: editContent },
    });
  };

  const onEdit = (editItemId, editItemContent) => {
    dispatch({
      type: "EDIT",
      data: {
        itemFileId: editItemId,
        itemContent: editItemContent,
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
