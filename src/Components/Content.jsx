import React from "react";
import Card from "../assets/Cards/Ellipse.png";

const Content = () => {
  return (
    <>
      <div className="custom-bg min-h-screen px-[190px]">
        <div className="w-[350px] h-[167px] rounded-md flex items-start p-[10px] justify-between border-[0.66px] border-solid">
          <div className="w-full">
            <picture>
              <img src={Card} alt="Card" className="h-[133px] w-[133px]" />
            </picture>
          </div>
          <div className="">
            <h5 className="font-Popins font-semibold text-[18px] text-white">
              Boiled Eggs
            </h5>
            <p className="text-[12px] text-white">
              Lorem ipsum dolor sit amet consectetur. Odio elementum in neque
              cras eget est.
            </p>
            <div className="flex justify-end items-center">
              <span className="text-white text-[14px] px-[6px] py-[4px] bg-[#FF4343] rounded-md text-center">
                $23.00
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
