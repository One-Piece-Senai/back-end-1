import profileImage from "../../assets/6.svg";
import { BarraBusca } from "./style-barra-busca";
import sino from "../../assets/sino.png";
import { BiFont, BiFontSize } from "react-icons/bi";
import React, { useEffect, useState } from "react";
import axios from "axios";

const API_BASE_URL = "http://localhost:8080/usuario";


export default function BarraDeBusca() {


  const [userName, setUserName] = useState("");
  const [error, setError] = useState("");

  const userId = localStorage.getItem("userId");

  const fetchUserName = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/usuario/buscar/${userId}`,
      );
      setUserName(response.data.nome);
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
          <h8>{userName ? userName : "usuário"}</h8>
          <img src={profileImage} alt="Perfil" className="profile-image" />
          
          
        </div>
      </BarraBusca>
    </>
  );
}