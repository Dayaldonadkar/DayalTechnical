import React from "react";

const Features = () => {
  return (
    <div className="flex justify-center text-black my-20 ">
      <div className="bg-[#F4F3FF] w-[90%] rounded-lg ">
        <div>
          <div className="flex flex-col items-center space-y-2 py-3 pt-5">
            <h1 className="text-5xl font-bold">50+</h1>
            <p className="text-lg font-medium border-b border-black w-[80%] flex justify-center pb-5">
              Registered Companies
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 py-3">
            <h1 className="text-5xl font-bold">100,000+</h1>
            <p className="text-lg font-medium border-b border-black w-[80%] flex justify-center pb-5">
              Happy Client
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 py-3">
            <h1 className="text-5xl font-bold">500+</h1>
            <p className="text-lg font-medium border-b border-black w-[80%] flex justify-center pb-5">
              Well known developers
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 ">
            <h1 className="text-5xl font-bold">24/7</h1>
            <p className="text-lg font-medium w-[80%] flex justify-center pb-5">
              Service
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
