import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = ({ showNavbar, handleNavbar }) => {
  return (
    <div className="text-[#5358EB]  relative  py-2">
      <div className="w-[100%]">
        <div className="flex justify-between">
          <h1 className="text-xl hover:cursor-pointer font-medium">
            Dayal Tech
          </h1>
          <div className="hidden">
            <ul className="space-y-2 flex space-x-5 md:space-y-0">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
              <li>Services</li>
              <li>Login</li>
            </ul>
          </div>
          <div onClick={handleNavbar} className="md:hidden">
            <MenuIcon />
          </div>
        </div>

        {/* <div className="flex justify-center md:hidden">
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
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
