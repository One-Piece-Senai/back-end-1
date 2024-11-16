import profileImage from "../../assets/Frame.png";
import { BarraBusca } from "./style-barra-busca";
import sino from "../../assets/sino.png";
import React, { useEffect, useState } from "react";
import axios from "axios";


export default function BarraDeBusca() {
  const [userName, setUserName] = useState("");  

  const [error, setError] = useState("");

  const userId = localStorage.getItem("userId");
  const fetchUserName = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/usuario/buscar/${userId}`,
      );
      setUserName(response.data.username);      
    } catch (error) {
      console.error("Erro ao buscar nome do usuário:", error);
      setError("Erro ao buscar nome do usuário");
    }
  };

  useEffect(() => {
    fetchUserName();
  }, []);

  return (
    <>
      <BarraBusca>
        <div className="conteudo-busca">
          <input type="text" placeholder="Pesquisar..." />
          <img src={sino} alt="" className="sino" />
          <img src={profileImage} alt="Perfil" className="profile-image" />
          <h3>{userName ? userName : "usuário"}</h3>
        </div>
      </BarraBusca>
    </>
  );
}
