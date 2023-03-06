import React from "react";
import Navbar from "./Navbar";
import Acessibilidade from "./Acessibilidade";
import Background from "./Background";
import Apresentacao from "./Apresentacao";
import Cards from "./Cards";

export default function TelaEstatica() {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex place-content-around">
          <Navbar />
        </div>

        <div className="absolute">
          <Apresentacao />
        </div>

        <div className="absolute bottom-0">
          <Background />
        </div>

        <div className="absolute mt-80">
          <Cards />
        </div>

        <div className="absolute bottom-4">
          <Acessibilidade />
        </div>
      </div>
    </>
  );
}
