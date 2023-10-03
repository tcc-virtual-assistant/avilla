import React from "react";
import bg from "../../public/images/campo_cinza-cropped.svg";

import AvilaSVG from "./AvilaSVG";

function Background() {
  return (
    <>
      <div
        className="w-full h-full flex justify-end items-start bg-bottom avilla"
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundRepeat: "no-repeat",
        }}
      >
          <div className="z-50">
          <AvilaSVG />
          </div>
        
      </div>
    </>
  );
}

export default Background;
