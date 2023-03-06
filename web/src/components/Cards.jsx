import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

function Cards() {
  const router = useRouter();
  return (
    <>
      <div className="flex space-x-20">
        <button class="w-1/4 rounded-sm">
          <img
            className="h-30 md:w-20 lg:w-40"
            src="\images\calendar-date-single.svg"
            alt=""
          />
          <p className="text-azul text-xl">Agenda semanal</p>
        </button>

        <button class="w-1/4 rounded-sm">
          <img
            className="h-30 md:w-20 lg:w-40"
            src="\images\chat-question-answer.svg"
            alt=""
          />
          <p className="text-verde-grama text-xl">Dúvidas frequentes</p>
        </button>

        <button class="w-1/4 rounded-sm">
          <img
            className="h-30 md:w-20 lg:w-40"
            src="\images\map-city.svg"
            alt=""
          />
          <p className="text-roxo text-xl">Localizações da planta</p>
        </button>

        <button  onClick={()=>{router.push('/projetos')}} class="w-1/4 rounded-sm">
          <img
            className="h-30 md:w-20 lg:w-40"
            src="\images\team-lightbulb.svg"
            alt=""
          />
          <p className="text-verde-agua text-xl">Projetos da ETS</p>
        </button>
      </div>
    </>
  );
}

export default Cards;
