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
    <div className="bg-[#121212] text-white flex justify-center">
      <div className="w-[90%]">
        <BrowserRouter>
          <Navbar handleNavbar={handleNavbar} showNavbar={showNavbar} />
          <div className="flex justify-center md:hidden">
            {showNavbar && (
              <div className="w-[100%] bg-[#121212] h-52 left-0 flex justify-center absolute">
                <ul className="space-y-2 ">
                  <li>Home</li>
                  <li>About</li>
                  <li>Services</li>
                  <li>Contact</li>
                  <li>Services</li>
                  <li>Login</li>
                </ul>
              </div>
            )}
          </div>
          <Routes>
            <Route>
              <Route path="/" element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
