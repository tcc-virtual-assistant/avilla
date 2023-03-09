import React from "react";

function Apresentacao() {
  return (
    <>
      <div className=" mx-4 py-8 flex flex-col text-center justify-center">
        <div className="text-xl md:text-2xl pb-3 text-verde-escuro">
          Olá! Sou Ávila, como posso te ajudar?
        </div>
        <div className="text-xl md:text-2xl  text-verde-escuro">
          Caso não tenha ideia do que perguntar, aqui estão minhas sugestões!
        </div>
      </div>
    </>
  );
}

export default Apresentacao;
