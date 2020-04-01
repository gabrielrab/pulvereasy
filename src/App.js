import React from "react";
import "./App.css";

import logo from "./assets/logo.png";

function App() {
  return (
    <>
      <header>
        <img src={logo} alt="logomarca" />
      </header>
      <section className="first-section">
        <h1>
          Todos queremos voltar a vida normal, mas antes prepare o ambiente,
          proteja suas pessoas do Covid-19.
        </h1>
      </section>
      <section className="what-we-do">
        <div>
          <h1>Oque fazemos ?</h1>
          <p>
            Desinfecção através através de pulverização e higienização de
            ambientes internos e externos contra o Coronavírus.
          </p>
        </div>
      </section>
      <section className="tech">
        <h1>União de tecnologias inovadoras:</h1>
        <ul>
          <li>Método utilizado e comprovado em Wuhan na China</li>
          <li>
            Pulverizador americano aprovado pela OMS, que desinfeta o ar e
            superfícies
          </li>
          <li>
            Poderoso desinfetante atóxico de última geração reproduzido no
            Brasil com certificação da ANVISA.
          </li>
        </ul>
      </section>
      <section className="apply">
        <h1>Aplicações</h1>
        <div className="content">
          <div className="box">
            <h3>Aplicações externas</h3>
            <ul>
              <li>Ruas </li>
              <li>Calçadas </li>
              <li>Pátios</li>
              <li>Estacionamentos</li>
              <li>Paradas de ônibus </li>
              <li>Playgrounds</li>
              <li>Condomínios</li>
              <li>Postos de combustíveis</li>
              <li>Áreas de grande circulação de pessoas</li>
            </ul>
          </div>

          <div className="box">
            <h3>Aplicações internas</h3>
            <ul>
              <li>Hospitais </li>
              <li>Industrias </li>
              <li>Escolas</li>
              <li>Comércios</li>
              <li>Lojas de conveniência</li>
              <li>Escritorios</li>
              <li>Ônibus</li>
              <li>Metrôs</li>
              <li>etc...</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="tech">
        <h1>
          Somos representantes exclusivos fã Imunizadora Hoffman de igrejinha e
          da Desinservice de Santa Maria.
        </h1>
        <iframe
          id="ytplayer"
          type="text/html"
          width="640"
          height="360"
          src="http://www.youtube.com/embed/CPqDsFkBz9g?autoplay=1&origin=http://example.com"
          frameborder="0"
          title="youtube video"
        />
      </section>

      <footer>
        <h1>Contato</h1>
        <p>
          Atendimento on-line durante a quarentena no (54) 99219-1005 ou (54)
          35360438
          <br />
          Av.Rubem Bento Alves 8078 sobreloja
        </p>
      </footer>
    </>
  );
}

export default App;
