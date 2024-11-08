import PerfilImg from "../../assets/Frame.png"
import { StyleSectionPerfil } from "./style-section-perfil"
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SectionPerfil = () => {
    const [userName, setUserName] = useState('');
    const [userDesc, setUserDesc] = useState('');

    const [error, setError] = useState('');

    const userId = localStorage.getItem('userId');
    const fetchUserName = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/usuario/buscar/${userId}`);
            setUserName(response.data.username);
            setUserDesc(response.data.descricaoPerfil);

        } catch (error) {
            console.error("Erro ao buscar nome do usuário:", error);
            setError("Erro ao buscar nome do usuário");
        }
    };

    useEffect(() => {
        fetchUserName();
    }, []);

    return (
        <StyleSectionPerfil>
            <div className="title-box">
                <h4>Bem Vind@!</h4>
                <img src={PerfilImg} alt="mulher foto" />
                <a href="/edit">Editar perfil</a>
            </div>

            <article>
                <h3>{userName ? userName : "usuário"}</h3>
                <p>xp 1500</p>
            </article>
            <div className="linha-xp"><div className="xp"></div></div>

            <p>{userDesc ? userDesc : "Descrição"}</p>
        </StyleSectionPerfil>
    )
}

export default SectionPerfil;
