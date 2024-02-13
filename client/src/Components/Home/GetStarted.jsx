import React from "react";
import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <div>
      <img
        src="https://thapatechnical.site/images/design.png"
        alt="get started"
      />
      <div>
        <div className="space-y-5 py-10">
          <div className="space-y-4">
            <div className="space-y-1">
              <h6>We are here to help you</h6>
              <h1 className="text-3xl font-bold flex flex-col">
                Get Started Today
              </h1>
            </div>
            <h3>
              Ready to take the first step towards a more efficient and secure
              IT infrastructure? Contact us today for a free consultation and
              lets discuss how Thapa Technical can help your business thrive in
              the digital age.
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
      </div>
    </div>
  );
};

export default GetStarted;
