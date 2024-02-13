import React, { useEffect, useState } from "react";
import Home from "./Pages/Home";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Register from "./Pages/Register";
import Login from "./Pages/Login";

const App = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const handleNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  const hideNavbar = () => {
    setShowNavbar(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="bg-[#121212] text-white flex justify-center">
      <div className="w-[84%] lg:w-[85%] xl:w-4/5 2xl:w-[75%]">
        <BrowserRouter>
          <Navbar
            handleNavbar={handleNavbar}
            showNavbar={showNavbar}
            hideNavbar={hideNavbar}
          />

          <div onClick={hideNavbar}>
            <Routes>
              <Route>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
              </Route>
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
