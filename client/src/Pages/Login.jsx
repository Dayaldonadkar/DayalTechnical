import React, { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setUser({
      ...user,
      [id]: value,
    });
  };
  return (
    <div className="">
      <h1 className="text-3xl font-bold pt-10">Contact Us</h1>
      <div className="lg:flex items-center sm:space-x-2 py-20">
        <div className="flex justify-center">
          <img
            className="sm:w-2/3"
            src="https://thapatechnical.site/images/login.png"
            alt="contact us"
          />
        </div>
        <div className="flex justify-center">
          <form className="space-y-6 py-10 w-[90%] sm:w-3/5 lg:w-4/5">
            <div className="flex flex-col">
              <label className="pb-3" htmlFor="name">
                Email
              </label>
              <input
                className="text-black py-1 pl-2"
                type="text"
                name=""
                id="email"
                value={user.email}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label className="pb-3" htmlFor="email">
                Password
              </label>
              <input
                className="text-black py-1 pl-2 outline-none"
                id="password"
                type="email"
                value={user.password}
                onChange={handleChange}
              />
            </div>

            <button className="bg-[#646CFF] px-7 py-2 rounded-lg">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
