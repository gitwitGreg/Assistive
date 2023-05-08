import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar.js"
import { Routes ,Route, BrowserRouter as Router } from 'react-router-dom'
import Grid from "./components/Grid.js";
import SearchBar from "./components/SearchBar.js";

function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <SearchBar></SearchBar>
      </Router>
      
    </>
    
  );
}
export default App;
