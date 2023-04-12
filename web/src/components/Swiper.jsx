import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

export default function Carrosel() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={2}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div class="flex flex-col lg:flex-row overflow-hidden pl-14 pr-14 mb-12 mt-14 lg:mt-20">
              <img
                class="block w-full lg:w-1/2 flex-none bg-cover lg:h-1/2"
                src="https://www.pumpkin.care/wp-content/uploads/2021/03/Scottish-Fold-Hero.jpg"
              />
              <div class="p-2 flex flex-col mb-6">
                <div class="text-roxo font-bold text-2xl mb-2 leading-tight">
                  Soluções Digitais
                </div>
                <p class="text-grey-darker text-lg leading-tight">
                  Temos por objetivo habilitar profissionais para analisar
                  requisitos funcionais e não-funcionais de produtos,
                  desenvolver e testar sistemas de software, de acordo com as
                  especificações do projeto, considerando as boas práticas do
                  mercado de tecnologia da informação e as necessidades do
                  usuário.
                </p>
              </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div class="flex flex-col lg:flex-row overflow-hidden pl-14 pr-14 mb-12 mt-14 lg:mt-20">
              <img
                class="block w-full lg:w-1/2 flex-none bg-cover lg:h-1/2"
                src="https://www.veterinarians.org/wp-content/uploads/2022/10/A-Guide-to-the-Scottish-Fold-Cat-Breed.jpg"
              />
              <div class="p-2 flex flex-col mb-6">
                <div class="text-roxo font-bold text-2xl mb-2 leading-tight">
                  Mecatrônica
                </div>
                <p class="text-grey-darker text-lg leading-tight">
                  Temos por objetivo habilitar profissionais para implementar e
                  manter máquinas e equipamentos automatizados, bem como atuar
                  no desenvolvimento de sistemas automatizados de manufatura,
                  respeitando procedimentos e normas técnicas, de qualidade, de
                  saúde e segurança no trabalho e de meio ambiente.
                </p>
              </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div class="flex flex-col lg:flex-row overflow-hidden pl-14 pr-14 mb-12 mt-14 lg:mt-20">
              <img
                class="block w-full lg:w-1/2 flex-none bg-cover lg:h-1/2"
                src="https://i.pinimg.com/originals/80/c9/9c/80c99c2804897effd3f59db32b33b1cd.jpg"
              />
              <div class="p-2 flex flex-col mb-6 text-center">
                <div class="text-roxo font-bold text-3xl mb-2 leading-tight">
                  Administração
                </div>
                <p class="text-grey-darker text-lg leading-tight">
                  Temos por objetivo habilitar profissionais em realizar e gerir
                  processos administrativos das áreas da indústria e de
                  serviços, utilizando-se de técnicas e tecnologias apropriadas
                  e de padrões éticos, legais, de qualidade e segurança, com
                  responsabilidade social e ambiental.
                </p>
              </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div class="flex flex-col lg:flex-row overflow-hidden pl-14 pr-14 mb-12 mt-14 lg:mt-20">
              <img
                class="block w-full lg:w-1/2 flex-none bg-cover lg:h-1/2"
                src="https://media.istockphoto.com/id/467801366/pt/foto/lovable-gato-scottish-fold.jpg?s=170667a&w=0&k=20&c=dJ9jMYD3t3eq986G34s4xTXwV3AbcSLXEKEBMNre8Os="
              />
              <div class="p-2 flex flex-col mb-6">
                <div class="text-roxo font-bold text-2xl mb-2 leading-tight">
                  Manufatura Digital
                </div>
                <p class="text-grey-darker text-lg leading-tight">
                  Temos por objetivo proporcionar qualificação profissional na
                  produção de veículos automotores em consonância com os
                  conceitos da indústria 4.0, seguindo normas técnicas e
                  procedimentos de qualidade, meio ambiente e saúde e segurança
                  do trabalho.
                </p>
              </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
