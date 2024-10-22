import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";
import api from "../../services/api";

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface TeacherItemProp {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProp> = ({ teacher }) => {
  function createNewConnection() {
    api.post("connections", {
      user_id: teacher.id,
    });
  }

  return (
    <main>
      <article className="teacher-item">
        <header>
          <img src={teacher.avatar} alt="Foto de um professor" />
          <div>
            <strong>{teacher.name}</strong>
            <span>{teacher.subject}</span>
          </div>
        </header>
        <p>{teacher.bio}</p>

        <footer>
          <p>
            Preço/hora
            <strong>R$ {teacher.cost}</strong>
          </p>
          <a
            onClick={createNewConnection}
            href={`https://wa.me/${teacher.whatsapp}`}
          >
            <img src={whatsappIcon} alt="Icone do aplicativo whatsapp" />
            Entrar em contato
          </a>
        </footer>
      </article>
    </main>
  );
};

export default TeacherItem;
