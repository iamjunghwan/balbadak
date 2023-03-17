import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import EnrollPage from "./pages/EnrollPage";
import DetailPage from "./pages/DetailPage";
import Main from "./pages/Main";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/enroll" element={<EnrollPage />}></Route>
          <Route path="/detail" element={<DetailPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
