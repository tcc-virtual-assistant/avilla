import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


export default function Carrosel() {
  const [text1, setText1] = useState(
    "Habilitamos profissionais para analisar requisitos funcionais e não-funcionais de produtos, desenvolver e testar sistemas de software, de acordo com as especificações do projeto, considerando as boas práticas do mercado de tecnologia da informação e as necessidades do usuário."
  );
  const [text2, setText2] = useState(
    "Temos por objetivo habilitar profissionais para implementar e manter máquinas e equipamentos automatizados, bem como atuar no desenvolvimento de sistemas automatizados de manufatura, respeitando procedimentos e normas técnicas, de qualidade, de saúde e segurança no trabalho e de meio ambiente."
  );
  const [text3, setText3] = useState(
    "Temos por objetivo habilitar profissionais em realizar e gerir processos administrativos das áreas da indústria e de serviços, utilizando-se de técnicas e tecnologias apropriadas e de padrões éticos, legais, de qualidade e segurança, com responsabilidade social e ambiental."
  );
  const [text4, setText4] = useState(
    "Temos por objetivo proporcionar qualificação profissional na produção de veículos automotores em consonância com os conceitos da indústria 4.0, seguindo normas técnicas e procedimentos de qualidade, meio ambiente e saúde e segurança do trabalho."
  );

  const handleClick = () => {
    if (
      text1 ===
      "Nossos instrutores nos proporcionam rico conhecimento em programação onde trabalhamos com aplicações Java, Python, Web e Java Script. Matérias mais técnicas como Sistemas Operacionais, Redes, Segurança de dados e Gerenciamento de Versões. Além das diversas palestras e treinamentos de métodos ágeis e de mapeamento de processo como o VSDIA, Scrum, UX/UI, RPA BOT, PowerBI e Design Thinking."
    ) {
      setText1(
        "Habilitamos profissionais para analisar requisitos funcionais e não-funcionais de produtos, desenvolver e testar sistemas de software, de acordo com as especificações do projeto, considerando as boas práticas do mercado de tecnologia da informação e as necessidades do usuário.​"
      );
    } else {
      setText1(
        "Nossos instrutores nos proporcionam rico conhecimento em programação onde trabalhamos com aplicações Java, Python, Web e Java Script. Matérias mais técnicas como Sistemas Operacionais, Redes, Segurança de dados e Gerenciamento de Versões. Além das diversas palestras e treinamentos de métodos ágeis e de mapeamento de processo como o VSDIA, Scrum, UX/UI, RPA BOT, PowerBI e Design Thinking."
      );
    }

    if (
      text2 ===
      "Nossos instrutores nos proporcionam rico conhecimento em diferentes sistemas e suas integrações, tais como Embarcados, Automatizados, Eletropneumáticos e Eletro-hidráulicos. Também contamos com a gestão da Manutenção de Sistemas Mecatrônicos e Controladores Lógicos Programáveis e Tecnologia de Produção Mecânica."
    ) {
      setText2(
        "Temos por objetivo habilitar profissionais para implementar e manter máquinas e equipamentos automatizados, bem como atuar no desenvolvimento de sistemas automatizados de manufatura, respeitando procedimentos e normas técnicas, de qualidade, de saúde e segurança no trabalho e de meio ambiente."
      );
    } else {
      setText2(
        "Nossos instrutores nos proporcionam rico conhecimento em diferentes sistemas e suas integrações, tais como Embarcados, Automatizados, Eletropneumáticos e Eletro-hidráulicos. Também contamos com a gestão da Manutenção de Sistemas Mecatrônicos e Controladores Lógicos Programáveis e Tecnologia de Produção Mecânica."
      );
    }

    if (
      text3 ===
      "Nossos instrutores nos proporcionam rico conhecimento em processos administrativos de RH e DP, Apoio Contábil e Financeiro, além de estimular a criatividade e Ideação em Projetos e a Modelagem dos mesmos. Enfatizam a sustentabilidade nos processos industriais e a segurança no Trabalho."
    ) {
      setText3(
        "Temos por objetivo habilitar profissionais em realizar e gerir processos administrativos das áreas da indústria e de serviços, utilizando-se de técnicas e tecnologias apropriadas e de padrões éticos, legais, de qualidade e segurança, com responsabilidade social e ambiental."
      );
    } else {
      setText3(
        "Nossos instrutores nos proporcionam rico conhecimento em processos administrativos de RH e DP, Apoio Contábil e Financeiro, além de estimular a criatividade e Ideação em Projetos e a Modelagem dos mesmos. Enfatizam a sustentabilidade nos processos industriais e a segurança no Trabalho."
      );
    }

    if (
      text4 ===
      "Nossos instrutores nos proporcionam rico conhecimento em Indústria 4.0, Engenharia Industrial e Qualidade, Processos de fabricação e montagem Mecânica, além de Desenho Técnico temos também Eletrotécnica e Pneumática."
    ) {
      setText4(
        "Temos por objetivo proporcionar qualificação profissional na produção de veículos automotores em consonância com os conceitos da indústria 4.0, seguindo normas técnicas e procedimentos de qualidade, meio ambiente e saúde e segurança do trabalho."
      );
    } else {
      setText4(
        "Nossos instrutores nos proporcionam rico conhecimento em Indústria 4.0, Engenharia Industrial e Qualidade, Processos de fabricação e montagem Mecânica, além de Desenho Técnico temos também Eletrotécnica e Pneumática."
      );
    }
  };

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={1}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div class="flex flex-col lg:flex-row overflow-hidden pl-20 pr-20 mt-14 lg:mt-44">
            <img
              class="block w-full lg:w-1/3 flex-none bg-cover lg:h-full rounded-xl"
              src="../images/ds.jpeg"
            />
            <div class="pl-20 pr-20 flex flex-col mb-4">
              <div class="text-roxo font-bold text-center text-5xl mb-8 leading-tight">
                Soluções Digitais
              </div>
              <p class="text-black text-4xl leading-tight">{text1}</p>
              <a
                class="text-2xl bg-roxo py-4 rounded-lg text-white w-1/4 text-center text-bold block mt-6 mb-10"
                onClick={handleClick}
              >
                Clique aqui
              </a>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div class="flex flex-col lg:flex-row overflow-hidden pl-20 pr-20 mt-14 lg:mt-44">
            <img
              class="block w-full lg:w-1/3 flex-none bg-cover lg:h-full rounded-xl"
              src="../images/mecatronica.jpeg"
            />
            <div class="pl-20 pr-20 flex flex-col mb-6">
              <div class="text-roxo font-bold text-center text-5xl mb-8 leading-tight">
                Mecatrônica
              </div>
              <p class="text-black text-4xl leading-tight">{text2}</p>
              <a
                class="text-2xl bg-roxo py-4 rounded-lg text-white w-1/4 text-center text-bold block mt-6 mb-10"
                onClick={handleClick}
              >
                Clique aqui
              </a>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div class="flex flex-col lg:flex-row overflow-hidden pl-20 pr-20 mt-14 lg:mt-44">
            <img
              class="block w-full lg:w-1/3 flex-none bg-cover lg:h-full rounded-xl"
              src="../images/adm.jpg"
            />
            <div class="pl-20 pr-20 flex flex-col mb-6">
              <div class="text-roxo font-bold text-center text-5xl mb-8 leading-tight">
                Administração
              </div>
              <p class="text-black text-4xl leading-tight">{text3}</p>
              <a
                class="text-2xl bg-roxo py-4 rounded-lg text-white w-1/4 text-center text-bold block mt-6 mb-10"
                onClick={handleClick}
              >
                Clique aqui
              </a>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div class="flex flex-col lg:flex-row overflow-hidden pl-20 pr-20 mt-14 lg:mt-44">
            <img
              class="block w-full lg:w-1/3 flex-none bg-cover lg:h-full rounded-xl"
              src="../images/manufatura.JPG"
            />
            <div class="pl-20 pr-20 flex flex-col mb-6">
              <div class="text-roxo font-bold text-center text-5xl mb-8 leading-tight">
                Manufatura Digital
              </div>
              <p class="text-grey-darker text-4xl leading-tight">{text4}</p>
              <a
                class="text-2xl bg-roxo py-4 rounded-lg text-white w-1/4 text-center text-bold block mt-6 mb-10"
                onClick={handleClick}
              >
                Clique aqui
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
