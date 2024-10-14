import React from "react";
import BackgroundImg from "../assets/Backround/bg.png";

const Content = () => {
  return (
    <div>
      <div
        className="overflow-hidden"
        style={{
          backgroundImage: `url(${BackgroundImg})`,
          backgroundSize: "cover",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Shuvo
      </div>
    </div>
  );
};

export default Content;
