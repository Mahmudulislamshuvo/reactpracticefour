import React from "react";
import Logo from "../assets/Logo/Logo.svg";

const HomePage = () => {
  return (
    <>
      <div className="bg-[#323334] px-[120px] pt-[80px]">
        <div className="flex justify-between pb-[60px]">
          <div>
            <picture>
              <img src={Logo} alt={Logo} />
            </picture>
          </div>
          <div>
            <input
              type="text"
              placeholder="Search Food...."
              id="Search"
              name="Search"
              className="bg-transparent border border-[#FF0909] px-[15px] py-[10px] w-[285px] rounded-md text-white focus:outline-none focus:border-[#FF0909]"
            />
          </div>
        </div>
        <div className="flex gap-x-5 justify-center pb-[30px]">
          <button className="px-[12px] py-[6px] bg-[#FF4343] rounded-md text-white">
            All
          </button>
          <button className="px-[12px] py-[6px] bg-[#FF4343] rounded-md text-white">
            Breakfast
          </button>
          <button className="px-[12px] py-[6px] bg-[#FF4343] rounded-md text-white">
            Lunch
          </button>
          <button className="px-[12px] py-[6px] bg-[#FF4343] rounded-md text-white">
            Dinner
          </button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
