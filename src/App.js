import React, { useEffect, useReducer, createContext } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import "./App.css";
import EnrollPage from "./pages/EnrollPage";
import DetailPage from "./pages/DetailPage";
import EditPage from "./pages/EditPage";
import Main from "./pages/Main";
import axios from "axios";
const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      newState = [action.data, ...state];
      break;
    }
    case "REMOVE": {
      newState = state.filter(it => it.id !== action.targetId);
      break;
    }
    case "EDIT": {
      newState = state.map(it =>
        it.id === action.data.id ? { ...action.data } : it
      );
      break;
    }
    default:
      return state;
  }

  localStorage.setItem("diary", JSON.stringify(newState));

  return newState;
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <></>
  },
  {
    path: "/enroll",
    element: <EnrollPage />
  },
  {
    path: "/detail",
    element: <DetailPage />
  },
  {
    path: "/edit/:id",
    element: <EditPage />
  }
]);
export const GlobalStateContext = createContext();
export const GlobalDispatchContext = createContext();

function App() {
  //저장할 값 , dispatch
  const [objItem, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    const options = {
      url: "http://172.31.99.98:8070/test/testAPI",
      method: "POST",
      header: {
        "Access-Control-Allow-Headers": "Content-Type"
      }
    };
    const itemList = axios(options).then(response =>
      console.log(response.data)
    );
    dispatch({ type: "INIT", data: itemList });
  }, []);

  const onEdit = (targetId, date, content, emotion) => {
    dispatch({
      type: "EDIT",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotion
      }
    });
  };

  return (
    <div className="App">
      <GlobalStateContext.Provider value={objItem}>
        <GlobalDispatchContext.Provider value={{ onEdit }}>
          <RouterProvider router={router} />
        </GlobalDispatchContext.Provider>
      </GlobalStateContext.Provider>
    </div>
  );
}

export default App;
