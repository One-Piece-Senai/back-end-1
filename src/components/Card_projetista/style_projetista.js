import styled from "styled-components";


export const Cardprojetista = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    width: 100%;
    height: 100px;
    padding: 10px;
    border-radius: 10%;
    
    .modulo{
        background-color: green;
        display: flex;
        border-radius: 16px;
        padding: 30px;
        width: 900px;
        height: 100px;
        position: relative;
    }
    
    .titulo{
        position: absolute;
        top: 0;  /* Posição no topo */
        left: 0; /* Posição à esquerda */
        margin: 10px; /* Espaçamento opcional */
        font-size: 24px;
        color: black;
    }
    
    .botao_novo{
        position: absolute;
        right: 31px;
    }
    .projetista{
        position: absolute;
        left: 10px;
        top: 60px;  /* Posição no topo */

    }`
