import styled from "styled-components";

export const BarraBusca = styled.div`
    position: fixed;
    height: 15vh;
    width: 80vw;
    margin-left: 20vw;
    padding-right: 5vw;
    display: flex;
    align-items: center;
    justify-content: end;

    background-color: white;

    .conteudo-busca{
        width: 40%;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    img {
        width: 20%;
    }
    .sino{
        width: 10%;
    }
`