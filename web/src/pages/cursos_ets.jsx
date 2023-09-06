import Acessibilidade from "@/components/Acessibilidade";
import Carrosel from "@/components/Swiper";
import React from "react";

export default function CursosETS() {
  return (
    <>
      <Carrosel />
      <div className="absolute bottom-0 w-full flex justify-center ">
        <Acessibilidade />
      </div>

      
    </>
  );
}
