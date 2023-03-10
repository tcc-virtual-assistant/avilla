import React from "react";
import Navbar from "./Navbar";
import Acessibilidade from "./Acessibilidade";
import Background from "./Background";
import Apresentacao from "./Apresentacao";
import Cards from "./Cards";
import AvilaSVG from "./AvilaSVG";
import Chat from "./Chat";

export default function TelaEstatica() {
  return (
    <>
      <div className="flex flex-col w-full  justify-center ">
      <Navbar/>
        <div className="grid space-y-0">
          <div className="h-full w-full md:flex justify-center ">
            <Apresentacao />
            <Cards />
          </div>
          <div className="absolute bottom-0 w-full flex justify-center ">
            <Acessibilidade />
          </div>
          {/* < Chat/> */}
          {/* <AvilaSVG/> */}
        </div>
      </div>
    </>
  );
}
