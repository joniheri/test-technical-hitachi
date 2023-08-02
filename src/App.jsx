import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Test1 from "./pages/Test1";
import Test2 from "./pages/Test2";
import Test3 from "./pages/Test3";

export default function App() {
  return (
    <div className="mb-5">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test1/:id" element={<Test1 />} />
          <Route path="/test2/:id" element={<Test2 />} />
          <Route path="/test3/:id" element={<Test3 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
