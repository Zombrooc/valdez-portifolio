import Image from "next/image";

import Aurora from "../components/AuroraEffect/index";

import UserInterfaceIllustration from "../assets/undraw_Mobile_interface_re_1vv9.svg";
import elianValdez from "../assets/IMG-20210802-WA0041.jpg";

export default function Home() {
  return (
    <>
      <div className="container" style={{ height: "100vh" }}>
        <div className="title">
          <h1>
            <span className="text">Desenvolvimento Web</span>
            <br />e Design Gráfico
          </h1>
          <p>
            {" "}
            Desenvolvendo artes incríveis e soluções web leves e performáticas
            para você e para sua empresa.
          </p>
        </div>
        <div className="illustration">
          <Image
            src={UserInterfaceIllustration}
            alt="User Interface Illustration"
            width={500}
            height={500}
          />
          {/* <img
          src={userInterfaceIllustration}
          alt="user interface illustration"
        /> */}
        </div>
      </div>
      <div
        className="container"
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Aurora />
        <a href="https://github.com/Zombrooc" className="circle">
          <Image
            height="128"
            width="128"
            src={elianValdez}
            alt="Elian's Profile Pic"
          />
        </a>
        <p style={{ marginTop: "25px", lineHeight: "1.5", fontSize: "18px" }}>
          Meu nome é Elian Valdez, me formei em Técnico em Informática pela E.
          E. Godofredo Rangel na cidade de Três Corações em dezembro de 2018 e
          sendo posteriormente indicado como instrutor de informática na
          Astrobyte – Centro de Treinamento. Antes mesmo de me formar em Técnico
          em Informática sempre tive uma paixão muito grande pela área, com 15
          anos comecei a estudar programação por conta própria, em pouco tempo
          já tinha conhecimento e uma grande facilidade na área de programação e
          desenvolvimento Web, no qual eu já desenvolvia inúmeros programas e
          pequenos sistemas web até mesmo para me auxiliar nos estudos do ensino
          médio. Dentro da própria instituição Godofredo Rangel durante minha
          formação Técnica acabei de me destacando dentre os demais, sendo
          selecionado para um estágio dentro da empresa DeltaNet (Provedor de
          Internet de Três Corações) e posteriormente sendo indicado para o
          cargo de instrutor de informática na Astrobyte - Centro de Treinamento
          como citado acima.
        </p>
      </div>
    </>
  );
}
