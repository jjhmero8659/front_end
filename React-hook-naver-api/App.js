import React, {useState} from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import axios from "axios";
import InputComp from "./components/InputComp.js";
import Home from "./components/Home.js";
import Search from "./components/Search.js";
import "./App.css";

function App(){

  return(
    <div id="App_wrap">
      <BrowserRouter>
          <InputComp/>
          <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route path="/search" element={<Search/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App;