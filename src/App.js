import React from "react";
import Login from "./Auth/Login";
import "./App.css";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Reg from "./Auth/Reg";
import Navbar from "./Auth/Nav";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Navbar" element={<Navbar> </Navbar>}></Route>
          <Route path="/" element={<Login />} />
          <Route path="/Reg" element={<Reg />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
