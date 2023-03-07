import React from "react";
import Navbar from "./Navbar";
import Acessibilidade from "./Acessibilidade";
import Background from "./Background";
import Apresentacao from "./Apresentacao";
import Cards from "./Cards";

export default function TelaEstatica() {
  return (
    <>
      <div className="bg-gray-100 flex w-full justify-center items-center">
        <div className="">
          <Apresentacao />
          <Cards />
          <Acessibilidade />
        </div>
      </div>
    </>
  );
}
