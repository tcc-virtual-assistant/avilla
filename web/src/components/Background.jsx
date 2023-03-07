import React from "react";
import bg from "../../public/images/campo_cinza-cropped.svg";
import Acessibilidade from "./Acessibilidade";
import AvilaSVG from "./AvilaSVG";

function Background() {
  return (
    <>
      <div
        className="w-full h-[580px] flex justify-end items-start bg-bottom avilla"
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundRepeat: "no-repeat",
        }}
      >
 
          <Acessibilidade />



          <AvilaSVG />
      
        
        {/* <img className="w-screen"
            src="/images/campo_cinza-cropped.svg"
            alt="Your Company"
          /> */}
      </div>
    </>
  );
}

export default Background;
