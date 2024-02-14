import React, { useState } from "react";

const Register = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setData({
      ...data,
      [id]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Failed to register");
      }
      // Registration successful
      console.log(response, "User registered successfully");
    } catch (error) {
      setError(error.message);
    }
  };

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
          <form
            className="space-y-6 py-10 w-[90%] sm:w-3/5 lg:w-4/5"
            onSubmit={handleSubmit}
          >
            <h1 className="text-3xl font-bold pt-10">Register</h1>
            {error && <p className="text-red-500">{error}</p>}
            <div className="flex flex-col">
              <label className="pb-3" htmlFor="username">
                Username
              </label>
              <input
                className="text-black py-1 pl-2 outline-none"
                id="username"
                type="text"
                value={data.username}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label className="pb-3" htmlFor="email">
                Email
              </label>
              <input
                className="text-black py-1 pl-2"
                type="text"
                id="email"
                value={data.email}
                onChange={handleChange}
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
                value={data.phone}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col">
              <label className="pb-3" htmlFor="password">
                Password
              </label>
              <input
                className="text-black py-1 pl-2 outline-none"
                id="password"
                type="password"
                value={data.password}
                onChange={handleChange}
              />
            </div>

            <button
              className="bg-[#646CFF] px-7 py-2 rounded-lg"
              onClick={handleSubmit}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
