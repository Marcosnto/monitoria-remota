import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherItem() {
  return (
    <main>
      <article className="teacher-item">
        <header>
          <img
            src="https://avatars1.githubusercontent.com/u/21700839?s=460&u=7ee1da211ae5bfdda6a647838eb88596f7fdf2f3&v=4"
            alt="Foto de um professor"
          />
          <div>
            <strong>Marcos Neto</strong>
            <span>Dança</span>
          </div>
        </header>
        <p>
          Entusiasta das melhores tecnologias de química avançada.
          <br />
          Apaixonado por explodir coisas em laboratório e por mudar a vida das
          pessoas através de experiências. Mais de 200.000 pessoas já passaram
          por uma das minhas explosões.
        </p>

        <footer>
          <p>
            Preço/hora
            <strong>R$ 80,00</strong>
          </p>
          <button type="button">
            <img src={whatsappIcon} alt="Icone do aplicativo whatsapp" />
            Entrar em contato
          </button>
        </footer>
      </article>

      <article className="teacher-item">
        <header>
          <img
            src="https://avatars1.githubusercontent.com/u/21700839?s=460&u=7ee1da211ae5bfdda6a647838eb88596f7fdf2f3&v=4"
            alt="Foto de um professor"
          />
          <div>
            <strong>Marcos Neto</strong>
            <span>Dança</span>
          </div>
        </header>
        <p>
          Entusiasta das melhores tecnologias de química avançada.
          <br />
          Apaixonado por explodir coisas em laboratório e por mudar a vida das
          pessoas através de experiências. Mais de 200.000 pessoas já passaram
          por uma das minhas explosões.
        </p>

        <footer>
          <p>
            Preço/hora
            <strong>R$ 80,00</strong>
          </p>
          <button type="button">
            <img src={whatsappIcon} alt="Icone do aplicativo whatsapp" />
            Entrar em contato
          </button>
        </footer>
      </article>
    </main>
  );
}

export default TeacherItem;
