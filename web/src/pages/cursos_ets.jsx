import Acessibilidade from "@/components/Acessibilidade";
import React from "react";

function CursosETS() {
  return (
    <>
      {/* src="\images\teste.webp" */}

      <div className="carousel w-2/5 h-2/5">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="\images\teste.webp" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <span className="text-white text-sm">
              O curso técnico de mecatrônica é uma formação que combina
              conhecimentos de mecânica, eletrônica e informática. Ele prepara
              profissionais para projetar, desenvolver, instalar e manter
              sistemas automatizados e robóticos em diversos setores da
              indústria, como aeronáutica, automotiva, de alimentos, entre
              outras. Durante o curso, os alunos aprendem sobre controle de
              processos, programação de dispositivos, sistemas hidráulicos e
              pneumáticos, eletrônica digital e analógica, entre outras
              habilidades essenciais para atuar nesse campo. O objetivo
              principal do curso é formar técnicos capazes de integrar e
              otimizar sistemas mecânicos, eletrônicos e de controle para criar
              soluções eficientes e inovadoras para as empresas.
            </span>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="\images\teste.webp" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <span className="text-white text-sm">
              O curso técnico de manufatura é uma formação que prepara
              profissionais para atuarem em processos de produção industrial,
              desde a criação do produto até a etapa final de montagem e
              embalagem. Durante o curso, os alunos aprendem sobre processos de
              fabricação, como usinagem, soldagem, moldagem, entre outros, além
              de técnicas de gestão de produção, qualidade e segurança do
              trabalho. O objetivo principal do curso é formar técnicos capazes
              de planejar, supervisionar e otimizar a produção industrial,
              visando a redução de custos, aumento de produtividade e melhoria
              contínua dos processos. Os profissionais formados em manufatura
              são muito requisitados pelo mercado, especialmente em indústrias
              de diferentes segmentos.
            </span>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src="\images\teste.webp" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <span className="text-white text-sm">
              O curso de administração é uma formação ampla, que prepara o aluno
              para atuar em diversas áreas em uma organização. Isso significa
              que seu leque de possibilidades no mercado de trabalho será
              enorme, mas também que o aluno precisa ser dinâmico, flexível e
              ter interesse multidisciplinar.
            </span>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src="\images\teste.webp" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <p className="text-white">aaaa</p>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default CursosETS;
