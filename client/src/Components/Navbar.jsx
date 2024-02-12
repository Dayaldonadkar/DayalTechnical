import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = ({ showNavbar, handleNavbar }) => {
  return (
    <div className="text-[#5358EB] flex justify-center relative px-7">
      <div className="w-[100%]">
        <div className="flex justify-between">
          <h1>Dayal Tech</h1>
          <div onClick={handleNavbar}>
            <MenuIcon />
          </div>
        </div>

        <div className="flex justify-center">
          {!showNavbar && (
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
      </div>
    </div>
  );
};

export default Navbar;
