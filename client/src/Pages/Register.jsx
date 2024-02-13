import React from "react";

const Register = () => {
  return (
    <div className="">
      <div className="lg:flex items-center sm:space-x-2 py-20">
        <div className="flex justify-center">
          <img
            className="sm:w-2/3"
            src="https://thapatechnical.site/images/register.png"
            alt="contact us"
          />
        </div>
        <div className="flex justify-center">
          <form className="space-y-6 py-10 w-[90%] sm:w-3/5 lg:w-4/5">
            <h1 className="text-3xl font-bold pt-10">Register</h1>
            <div className="flex flex-col">
              <label className="pb-3" htmlFor="username">
                Username
              </label>
              <input
                className="text-black py-1 pl-2 outline-none"
                id="username"
                type="text"
              />
            </div>
            <div className="flex flex-col">
              <label className="pb-3" htmlFor="name">
                Email
              </label>
              <input
                className="text-black py-1 pl-2"
                type="text"
                name=""
                id="name"
              />
            </div>
            <div className="flex flex-col">
              <label className="pb-3" htmlFor="phone">
                Phone
              </label>
              <input
                className="text-black py-1 pl-2 outline-none"
                id="phone"
                type="phone"
              />
            </div>

            <div className="flex flex-col">
              <label className="pb-3" htmlFor="email">
                Password
              </label>
              <input
                className="text-black py-1 pl-2 outline-none"
                id="email"
                type="email"
              />
            </div>

            <button className="bg-[#646CFF] px-7 py-2 rounded-lg">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
