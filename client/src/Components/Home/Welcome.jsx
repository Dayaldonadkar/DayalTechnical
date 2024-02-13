import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="sm:flex items-center">
      <div className="space-y-5 xl:space-y-10 py-10">
        <div className="space-y-4">
          <div className="space-y-1">
            <h6>We are the best IT company</h6>
            <h1 className="text-3xl font-bold flex flex-col">
              <span>Welcome to</span> <span>The Dayal Technical</span>
            </h1>
          </div>
          <h3 className="sm:w-[90%] lg:w-[80%] xl:w-[70%]">
            Are you ready to take your business to the next level with
            cutting-edge IT solutions? Look no further! At Thapa Technical, we
            specialize in providing innovative IT services and solutions
            tailored to meet your unique needs.
          </h3>
        </div>
        <div className="space-x-5">
          <Link to="/contact">
            <button className="bg-[#646CFF] px-3 py-2 rounded-lg">
              Connect Now
            </button>
          </Link>
          <button className="border-[#646CFF] border px-4 py-2 rounded-lg">
            Learn more
          </button>
        </div>
      </div>
      <div>
        <img src="https://thapatechnical.site/images/home.png" alt="" />
      </div>
    </div>
  );
};

export default Welcome;
