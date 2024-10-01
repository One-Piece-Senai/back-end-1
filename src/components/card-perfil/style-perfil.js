import styled from "styled-components";

export const ContainerPerfil = styled.div`  
    background-color: #fff;
    border-radius: 16px;
    padding: 30px;
    margin: 70px;

    div{
        display: flex;
        justify-content: space-between;
    }

    div > h4 {
        font-size: 25px;
    }

    div > a {
        font-size: 18px;
        color: #0066FF;
        text-decoration: none;
    }

    div > img {
        width: 160px;
        height: auto;
    }

    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        /* justify-content: center;
        text-align: center; */
    }

    article {
        display: flex;
        gap: 10px;
    }

    section > .barra-xp {
        width: 400px;
        border-radius: 50px;
        height: 18px;
        background-color: #8b8b8b;
        margin: 20px;
    }

`