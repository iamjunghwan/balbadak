import React, { Suspense, lazy, useReducer } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
/* 
import EnrollPage from "./pages/EnrollPage";
import EditPage from "./pages/EditPage";
import Main from "./pages/Main";
import ExceptPage from "./pages/ExceptPage";
*/
import {
  reducer,
  GlobalStateContext,
  GlobalDispatchContext,
} from "./config/reducer";
import "./App.css";

const Main = lazy(() => import("./pages/Main"));
const EnrollPage = lazy(() => import("./pages/EnrollPage"));
const EditPage = lazy(() => import("./pages/EditPage"));
const ExceptPage = lazy(() => import("./pages/ExceptPage"));

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
    path: "/edit/:id",
    element: <EditPage />,
  },
  {
    path: "/*",
    element: <ExceptPage />,
  },
]);

const App = () => {
  const [items, dispatch] = useReducer(reducer, []);

  return (
    <div className="App">
      <Suspense fallback={<div>Loading .... </div>}>
        <GlobalDispatchContext.Provider value={{ dispatch }}>
          <GlobalStateContext.Provider value={items}>
            <RouterProvider router={router} />
          </GlobalStateContext.Provider>
        </GlobalDispatchContext.Provider>
      </Suspense>
    </div>
  );
};

export default App;
