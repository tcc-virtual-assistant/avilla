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
      <div className="flex w-full justify-center items-center">
        <div className="">
          {/* <Apresentacao />
          <Cards /> */}
          < Chat/>
          {/* <Acessibilidade /> */}
          {/* <AvilaSVG/> */}
        </div>
      </div>
    </>
  );
}
