import React, { useState } from "react";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";

const App = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const handleNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <div className="bg-[#121212] text-white ">
      <BrowserRouter>
        <Navbar handleNavbar={handleNavbar} showNavbar={showNavbar} />
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
