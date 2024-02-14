import React, { useState } from "react";

const Contact = () => {
  const [user, setUser] = useState({ name: "", email: "", message: "" });
  const handleChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setUser({
      ...user,
      [id]: value,
    });
  };
  return (
    <div className="">
      <div className="lg:flex items-center sm:space-x-2 py-20">
        <div className="flex justify-center">
          <img
            className="sm:w-2/3"
            src="https://thapatechnical.site/images/support.png"
            alt="contact us"
          />
        </div>
        <div className="flex justify-center">
          <form className="space-y-6 py-10 w-[90%] sm:w-3/5 lg:w-4/5">
            <h1 className="text-3xl font-bold pt-10">Contact Us</h1>
            <div className="flex flex-col">
              <label className="pb-3" htmlFor="name">
                Name
              </label>
              <input
                className="text-black py-1 pl-2"
                type="text"
                name=""
                id="name"
                value={user.name}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label className="pb-3" htmlFor="email">
                Email
              </label>
              <input
                className="text-black py-1 pl-2 outline-none"
                id="email"
                type="email"
                value={user.email}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label className="pb-3" htmlFor="message">
                Message
              </label>
              <textarea
                className="text-black"
                id="message"
                rows="8"
                cols="50"
                type="fieldtext"
                value={user.message}
                onChange={handleChange}
              />
            </div>
            <button className="bg-[#646CFF] px-7 py-2 rounded-lg">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
