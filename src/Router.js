import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Test from "./pages/Test";
import Celebration from "./pages/Celebration";
import VideoPlay from "./pages/VideoPlay";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/test" element={<Test />} />
        <Route path="/video" element={<VideoPlay />} />
        <Route path="/celebration" element={<Celebration />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
