/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Users from "./Users";
import CreateUsers from "./createUsers";
import UpdateUsers from "./updateUsers";

function App() {

  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />} ></Route>
          <Route path="/create" element={<CreateUsers />} ></Route>
          {/* <Route path="/update/:idForUpdate" element={<UpdateUsers />} ></Route> */}
          <Route path="/update/:id" element={<UpdateUsers />} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
