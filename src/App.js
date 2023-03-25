import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import EnrollPage from "./pages/EnrollPage";
import DetailPage from "./pages/DetailPage";
import EditPage from "./pages/EditPage";
import Main from "./pages/Main";

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
    path: "/edit",
    element: <EditPage />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
