import React from "react";

const Features = () => {
  return (
    <div className="flex justify-center text-black my-20 ">
      <div className="bg-[#F4F3FF] w-[90%] rounded-lg sm:hidden">
        <div>
          <div className="flex flex-col items-center space-y-2 py-3 pt-5">
            <h1 className="text-3xl font-bold">50+</h1>
            <p className="text-lg font-medium border-b border-black w-[80%] flex justify-center pb-5">
              Registered Companies
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 py-3">
            <h1 className="text-3xl font-bold">100,000+</h1>
            <p className="text-lg font-medium border-b border-black w-[80%] flex justify-center pb-5">
              Happy Client
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 py-3">
            <h1 className="text-3xl font-bold">500+</h1>
            <p className="text-lg font-medium border-b border-black w-[80%] flex justify-center pb-5">
              Well known developers
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 ">
            <h1 className="text-3xl font-bold">24/7</h1>
            <p className="text-lg font-medium w-[80%] flex justify-center pb-5">
              Service
            </p>
          </div>
        </div>
      </div>
      <div className="w-[90%] space-y-8 lg:hidden">
        <div className="hidden sm:block space-y-10 py-3 bg-[#F4F3FF]  rounded-lg px-5 hover:scale-105 transistion duration-300">
          <div className=" flex justify-around ">
            <div className="flex flex-col justify-center space-y-1 w-3/6 border-r border-black">
              <h1 className="flex justify-center text-3xl font-bold">50+</h1>
              <p className="text-lg font-medium flex justify-center">
                Registered Companies
              </p>
            </div>
            <div className="flex flex-col items-center space-y-1 py-3 w-1/2">
              <h1 className="text-3xl font-bold flex justify-center">
                100,000+
              </h1>
              <p className="text-lg font-medium flex justify-center">
                Happy Client
              </p>
            </div>
          </div>
        </div>
        <div className="hidden sm:block space-y-10 hover:scale-105 transistion duration-300 py-3 bg-[#F4F3FF] rounded-lg px-5 ">
          <div className=" flex justify-around ">
            <div className="flex flex-col justify-center space-y-1 w-3/6 border-r border-black">
              <h1 className="flex justify-center text-3xl font-bold">500+</h1>
              <p className="text-lg font-medium flex justify-center">
                Well known Developers
              </p>
            </div>
            <div className="flex flex-col items-center space-y-1 py-3 w-1/2">
              <h1 className="text-3xl font-bold flex justify-center">24/7</h1>
              <p className="text-lg font-medium flex justify-center">Service</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[100%] space-y-8 hidden lg:block">
        <div className="hidden sm:block space-y-10 py-3 bg-[#F4F3FF]  rounded-lg px-5 hover:scale-105 transistion duration-300">
          <div className=" flex justify-around ">
            <div className="flex flex-col justify-center space-y-1 w-1/4 border-r border-black">
              <h1 className="flex justify-center text-3xl font-bold">50+</h1>
              <p className="text-base font-medium flex justify-center">
                Registered Companies
              </p>
            </div>
            <div className="flex flex-col items-center space-y-1 py-3 w-1/4 border-r border-black">
              <h1 className="text-3xl font-bold flex justify-center">
                100,000+
              </h1>
              <p className="text-base font-medium flex justify-center ">
                Happy Client
              </p>
            </div>

            <div className="flex flex-col justify-center space-y-1 w-1/4 border-r border-black">
              <h1 className="flex justify-center text-3xl font-bold">500+</h1>
              <p className="text-base font-medium flex justify-center">
                Well known Developers
              </p>
            </div>
            <div className="flex flex-col items-center space-y-1 py-3 w-1/4">
              <h1 className="text-3xl font-bold flex justify-center">24/7</h1>
              <p className="text-base font-medium flex justify-center">
                Service
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
