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
      <div className="">
        <div className="">
          <Apresentacao />
          <Cards />
          <div className="flex align-bottom justify-center">
          <Acessibilidade/>
          </div>
          {/* < Chat/> */}
          {/* <AvilaSVG/> */}
        </div>
      </div>
    </>
  );
}
