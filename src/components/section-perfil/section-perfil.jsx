import PerfilImg from "../../assets/Frame.png"
import { StyleSectionPerfil } from "./style-section-perfil"
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SectionPerfil =  () =>{
    const [userName, setUserName] = useState('');
  const [error, setError] = useState('');

  const userId = 1;

  const fetchUserName = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/usuario/buscar/${userId}`);
      setUserName(response.data.nome);
    } catch (error) {
      console.error("Erro ao buscar nome do usuário:", error);
      setError("Erro ao buscar nome do usuário");
    }
  };

  useEffect(() => {
    fetchUserName();
  }, []);

    return(
        <StyleSectionPerfil>
            <div className="title-box">
                <h4>Bem Vind@!</h4>
                <img src={PerfilImg} alt="mulher foto" />
                <a href="">Editar perfil</a>
            </div>

            <article>
                <h3>{userName ? userName : "usuário"}</h3>
                <p>xp 1500</p>
            </article>
            <div className="linha-xp"><div className="xp"></div></div>

            <p>Maria José é uma projetista com mais de 10 anos de experiência no desenvolvimento de projetos mecânicos e industriais. Especializado em CAD e impressão 3D, atua na criação de soluções inovadoras para otimização de processos. Possui formação em Engenharia Mecânica e diversos cursos na área de design de produto.</p>
        </StyleSectionPerfil>
    )
}

export default SectionPerfil;
