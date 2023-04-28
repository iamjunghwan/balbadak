import { useReducer } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EnrollPage from "./pages/EnrollPage";
import DetailPage from "./pages/DetailPage";
import EditPage from "./pages/EditPage";
import Main from "./pages/Main";
import ExceptPage from "./pages/ExceptPage";
import {
  reducer,
  GlobalStateContext,
  GlobalDispatchContext,
} from "./config/reducer";
import "./App.css";

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
  // {
  //  path: "/detail",
  // element: <DetailPage />,
  // },
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
      <GlobalDispatchContext.Provider value={{ dispatch }}>
        <GlobalStateContext.Provider value={items}>
          <RouterProvider router={router} />
        </GlobalStateContext.Provider>
      </GlobalDispatchContext.Provider>
    </div>
  );
};

export default App;
