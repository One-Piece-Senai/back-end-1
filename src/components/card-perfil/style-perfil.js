import styled from "styled-components";

export const ContainerPerfil = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 16px;
    padding: 30px;
    margin-left: 70px;
    width: 927px;
    height: 482px;

    .botao_novo {
        background-color: #FFD32C;
        padding: 15px;
        height: 45px;
        border-radius: 35px;
        border: 0;
        font-weight: 700;
        width: 100px;
    }

    .botao_aceitar {
        background-color: green;
        padding: 15px;
        height: 45px;
        border-radius: 35px;
        border: 0;
        font-weight: 700;
        width: 100px;
    }
    .botao_voltar {
        background-color: red;
        padding: 15px;
        height: 45px;
        border-radius: 35px;
        border: 0;
        font-weight: 700;
        width: 100px;
    }
    .buttons { 
        display: flex;
        padding: 15px;
        margin: 3%;

    }
`;