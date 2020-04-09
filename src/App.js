import React, { useState } from "react";
import "./App.css";

import logo from "./assets/logo.png";
import banner from "./assets/img-footer.jpeg";

import { FaWhatsapp, FaFacebook } from "react-icons/fa";

import api from "./service/api";

function App() {
  const [user, setUser] = useState([]);

  const handleChange = (event) => {
    const auxValues = { ...user };

    auxValues[event.target.name] = event.target.value;
    setUser(auxValues);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // eslint-disable-next-line no-unused-vars
      const resposne = await api.post("/sendmail", {
        name: user.name,
        email: user.email,
        tel: user.tel,
        know: "Pelo nosso site",
        subject: user.subject,
      });
      alert("Enviado com sucesso");
    } catch (error) {
      alert("Erro ao enviar a mensagem");
    }
  };

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
          <h1>A solução</h1>
          <p>
            Desinfecção através de pulverização e higienização de ambientes
            internos e externos contra o Coronavírus.
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
          Somos representantes exclusivos da Imunizadora Hoffman de igrejinha e
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
        <img src={banner} alt="banner" />
        <div className="contact">
          <div className="contactInfo">
            <div className="titleInfo">
              <h1>Contato</h1>
              <ul>
                <li>
                  <a
                    href="https://api.whatsapp.com/send?phone=5554992191005&text=Ol%C3%A1%2C%20vim%20pelo%20Site%20http%3A%2F%2Fpulvereasy.com.br%2F"
                    target="_blank"
                  >
                    <FaWhatsapp className="logos" size={32} color="#29a672" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/PulverEasy/?__xts__[0]=68.ARD_Rxl1b7UDjn1xW4M5bjKiwPhznqqYbDL2eHLvn_1Lkzz52gMH43_yUsCNGSOxAj6nVg11EywCwpLO-6LL-dpE8F09WQgh5cPN4GkfmSq0hF1a00e7kFMxf8RsmbuhmN82XZDjkaoRetxhDAqrNZtZpfmsrppPyTYTOFKCntWR1EK03vwqQSeIUu4sFxjaWhwgfMbqV_YkdGfBBBDQ1QlSaE5gwf40RPYgl11c3j_-4wICfvqh7bdUuc7RxMSrTPrDcT98O-z_kgDV2B7g_YQalrBAYaB7gldX6K1jRqhuDwS6ms5gckyUps1aQ9q1m3DRzrHkqjuIDJOvWeJQI3ZPSg"
                    target="_blank"
                  >
                    <FaFacebook className="logos" size={32} color="#29a672" />
                  </a>
                </li>
              </ul>
            </div>
            <p>
              Contato@pulvereasy.com.br <br />
              Atendimento on-line durante a quarentena no (54) 99219-1005 ou
              (54) 35360438
              <br />
              Av.Rubem Bento Alves 8078 sobreloja
            </p>
          </div>
          <form className="form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Nome Completo"
              required
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              onChange={handleChange}
            />
            <input
              type="tel"
              name="tel"
              placeholder="Telefone"
              required
              onChange={handleChange}
            />
            <textarea
              type="text"
              name="subject"
              placeholder="Mensagem"
              required
              onChange={handleChange}
            />
            <button type="submit">Enviar</button>
          </form>
        </div>
      </footer>
    </>
  );
}

export default App;
