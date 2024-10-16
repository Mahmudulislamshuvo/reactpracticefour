import React from "react";
import Card from "../assets/Cards/Ellipse.png";

const Content = () => {
  return (
    <>
      <div className="custom-bg min-h-screen px-[190px] py-[65px]">
        <div className="flex-wrap flex gap-x-[20px] gap-y-[30px]">
          <div
            className="w-[350px] h-[167px] rounded-md flex items-start p-[10px] justify-between border-[0.66px] border-solid"
            style={{
              border: `
              radial-gradient(80.69% 208.78% at 108.28% 112.58%, [#eabfff] 0%, rgba(135, 38, 183, 0) 100%),
              radial-gradient(80.38% 222.5% at -13.75% -12.36%, [#98f9ff] 0%, rgba(255, 255, 255, 0) 100%)
            `,
              background: `radial-gradient(
               90.16% 143.01% at 15.32% 21.04%,
               rgba(165, 239, 255, 0.2) 0%,
               rgba(110, 191, 244, 0.0447917) 77.08%,
               rgba(70, 144, 213, 0) 100%
               )`,
              backdropFilter: `blur(13.1842px)`,
              backgroundBlendMode: `overlay, normal`,
            }}
          >
            <div className="w-full">
              <picture>
                <img src={Card} alt="Card" className="h-[133px] w-[133px]" />
              </picture>
            </div>
            <div className="">
              <h5 className="font-Popins font-semibold text-[18px] text-white mb-[6px]">
                Boiled Eggs
              </h5>
              <p className="text-[12px] text-white pb-[25px]">
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
      </div>
    </>
  );
};

export default Content;