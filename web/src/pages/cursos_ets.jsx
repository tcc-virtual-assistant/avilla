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

      {/* <!-- carousel slider --> */}

      {/* <div className="max-w-full w-full px-2 rounded-sm bg-white shadow-lg">
          <img
            alt=""
            className="w-full h-auto max-w-auto"
            src="https://www.pumpkin.care/wp-content/uploads/2021/03/Scottish-Fold-Hero.jpg"
          />
          <h5 class="mb-2 text-xl font-medium text-roxo">Soluções Digitais</h5>
          <p class="mb-4 text-base text-neutral-600">
            Temos por objetivo habilitar profissionais para analisar requisitos
            funcionais e não-funcionais de produtos, desenvolver e testar
            sistemas de software, de acordo com as especificações do projeto,
            considerando as boas práticas do mercado de tecnologia da informação
            e as necessidades do usuário.
          </p>
        </div>

        <div className="max-w-full w-full px-2 rounded-sm bg-white shadow-lg">
          <img
            alt=""
            className="w-full h-auto max-w-auto"
            src="https://www.veterinarians.org/wp-content/uploads/2022/10/A-Guide-to-the-Scottish-Fold-Cat-Breed.jpg"
          />
          <h5 class="mb-2 text-xl font-medium text-roxo">Mecatrônica</h5>
          <p class="mb-4 text-base text-neutral-600">
            Temos por objetivo habilitar profissionais para implementar e manter
            máquinas e equipamentos automatizados, bem como atuar no
            desenvolvimento de sistemas automatizados de manufatura, respeitando
            procedimentos e normas técnicas, de qualidade, de saúde e segurança
            no trabalho e de meio ambiente.
          </p>
        </div>

        <div className="max-w-full w-full px-2 rounded-sm bg-white shadow-lg">
          <img
            alt=""
            className="w-full h-auto max-w-auto"
            src="https://i.pinimg.com/originals/80/c9/9c/80c99c2804897effd3f59db32b33b1cd.jpg"
          />
          <h5 class="mb-2 text-xl font-medium text-roxo">Administração</h5>
          <p class="mb-4 text-base text-neutral-600">
            Temos por objetivo habilitar profissionais em realizar e gerir
            processos administrativos das áreas da indústria e de serviços,
            utilizando-se de técnicas e tecnologias apropriadas e de padrões
            éticos, legais, de qualidade e segurança, com responsabilidade
            social e ambiental.
          </p>
        </div>

        <div className="max-w-full w-full px-2 rounded-sm bg-white shadow-lg">
          <img
            alt=""
            className="w-full h-auto max-w-auto"
            src="https://i.pinimg.com/736x/39/03/7c/39037c96e5f02753f1881b78ab47c95f--animal-faces-guide.jpg"
          />
          <h5 class="mb-2 text-xl font-medium text-roxo">Manufatura</h5>
          <p class="mb-4 text-base text-neutral-600">
            Temos por objetivo proporcionar qualificação profissional na
            produção de veículos automotores em consonância com os conceitos da
            indústria 4.0, seguindo normas técnicas e procedimentos de
            qualidade, meio ambiente e saúde e segurança do trabalho.
          </p>
        </div> */}
    </>
  );
}
