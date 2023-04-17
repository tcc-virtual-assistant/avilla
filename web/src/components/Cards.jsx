import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

function Cards() {
  const router = useRouter();
  return (
    <>
      <div className="flex md:absolute md:top-1/2 justify-center flex-col md:flex-row space-x-0 space-y-2 md:space-x-20 md:space-y-0 mx-12">
        <button onClick={()=>{router.push('/agenda')}} class=" flex flex-col items-center justify-center">
          <img
            className="w-2/4  md:w-10 lg:w-24 2xl:w-40"
            src="\images\calendar-date-single.svg"
            alt=""
          />
          <p className="text-azul text-xl">Agenda semanal</p>
        </button>

        <button class="  flex flex-col items-center justify-center">
          <img
            className="w-2/4  md:w-10 lg:w-24 2xl:w-40"
            src="\images\education.svg"
            alt=""
          />
          <p className="text-gray-600 text-xl">Cursos da ETS</p>
        </button>

        <button onClick={()=>{router.push('/chat')}}
        class=" flex flex-col items-center justify-center">
          <img
            className="w-2/4  md:w-10 lg:w-24  2xl:w-40"
            src="\images\chat-question-answer.svg"
            alt=""
          />
          <p className="text-verde-grama text-xl">Dúvidas frequentes</p>
        </button >

        <button class=" flex flex-col items-center justify-center">
          <img
            className="w-2/4  md:w-10 lg:w-24 2xl:w-40"
            src="\images\map-city.svg"
            alt=""
          />
          <p className="text-roxo text-xl">Localizações da planta</p>
        </button>

        <button  onClick={()=>{router.push('/projetos')}} class=" flex flex-col items-center justify-center">
          <img
            className="w-2/4  md:w-10 lg:w-24 2xl:w-40"
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
